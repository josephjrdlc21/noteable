<?php

namespace App\Repositories\Client;

use App\Interfaces\Client\AuthenticateRepositoryInterface;

use App\Models\User;

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

    public function logout()  {
        Auth::guard("web")->logout();

        session()->flash('notification-status', "success");
        session()->flash('notification-msg', "You have been logged out.");
        return redirect()->route('client.auth.login');
    }
}