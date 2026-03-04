<?php

namespace App\Repositories\Client;

use App\Interfaces\Client\AuthenticateRepositoryInterface;

use App\Models\User;
use App\Events\UserRegisterEvent;

use Illuminate\Support\Facades\Auth;

class AuthenticateRepository implements AuthenticateRepositoryInterface{

    public function login() {
       
        return inertia('client/auth/login');
    }
    
    public function authenticate(array $data) {

        $email = strtolower($data['email']);
        $password = $data['password'];

        $remember_me = $data['remember_me'] ?? 0;
		$field = filter_var($email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if(Auth::guard("web")->attempt(['email' => $email, 'password' => $password], $remember_me)){
            $account = Auth::guard("web")->user();

            if(!$account->email_verified_at) {
                session()->flash('notification-status', "warning");
                session()->flash('notification-msg', "Account is not verified.");

                Auth::guard("web")->logout();
            }

            if($account->status == "inactive") {
                session()->flash('notification-status', "warning");
                session()->flash('notification-msg', "Account is inactive.");

                Auth::guard("web")->logout();
            }

            $account->last_login_at = now();
            $account->save();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Welcome {$account->name}!.");
            return redirect()->route('client.dashboard');
        }

        session()->flash('notification-status', "failed");
        session()->flash('notification-msg', "Invalid account credentials.");
        return redirect()->route('client.auth.login');
    }

    public function register() {
       
        return inertia('client/auth/register');
    }

    public function store_register(array $data) {

        $token = Str::random(60);
        $code = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);
        $expire_at = now()->addMinutes(10);

        DB::beginTransaction();
        try{
            $user = new User;
            $user->email = strtolower($data['email']);
            $user->name = $data['name'];
            $user->password = bcrypt($data['password']);
            $user->otp = $code;
            $user->otp_exprires_at = $expire_at;
            $user->token = $token;
            $user->save();

            DB::commit();

            if(env('MAIL_SERVICE', false)){
                event(new UserRegisterEvent($user));
            }

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "You have created an account. OTP was sent to email please verify your account.");
            return redirect()->route('client.auth.verify', ['token' => $user->token]);
        }catch(\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
        }

        return redirect()->back();
    }

    public function verify(string $token) {

        $data['user'] = User::where('token', $token)->where('otp_expires_at', '>=', now())->first();

        if(!$data['user']) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Invalid token or OTP.");
            return redirect()->route('client.auth.register');
        }

        return inertia('client/auth/verify', $data);
    }

    public function store_verify(string $token, array $data) {
        $user = User::where('token', $token)->where('otp', $data['otp'])->where('otp_expires_at', '>=', now())->first();

        if(!$user) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Invalid token or OTP.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $user->otp = null;
            $user->otp_exprires_at = null;
            $user->token = null;
            $user->email_verified_at = now();
            $user->save();

            DB::commit();

            Auth::guard("web")->login($user);

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Account is now verified.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('client.dashboard');
    }

    public function logout()  {
        Auth::guard("web")->logout();

        session()->flash('notification-status', "success");
        session()->flash('notification-msg', "You have been logged out.");
        return redirect()->route('client.auth.login');
    }
}