<?php

namespace App\Repositories\Admin;

use App\Interfaces\Admin\AuthenticateRepositoryInterface;

use App\Models\Admin;

use Illuminate\Support\Facades\Auth;

class AuthenticateRepository implements AuthenticateRepositoryInterface{

    public function login() {
       
        return inertia('admin/auth/login');
    }
    
    public function authenticate(array $data) {

        $email = strtolower($data['email']);
        $password = $data['password'];

        $remember_me = $data['remember_me'] ?? 0;
		$field = filter_var($email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if(Auth::guard("admin")->attempt(['email' => $email, 'password' => $password], $remember_me)){
            $account = Auth::guard("admin")->user();

            if(!$account->email_verified_at) {
                session()->flash('notification-status', "warning");
                session()->flash('notification-msg', "Account is not verified.");

                Auth::guard("admin")->logout();
            }

            if($account->status == "inactive") {
                session()->flash('notification-status', "warning");
                session()->flash('notification-msg', "Account is inactive.");

                Auth::guard("admin")->logout();
            }

            $account->last_login_at = now();
            $account->save();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Welcome {$account->name}!");
            return redirect()->route('admin.dashboard');
        }

        session()->flash('notification-status', "failed");
        session()->flash('notification-msg', "Invalid account credentials.");
        return redirect()->route('admin.auth.login');
    }

    public function logout()  {
        Auth::guard("admin")->logout();

        session()->flash('notification-status', "success");
        session()->flash('notification-msg', "You have been logged out.");
        return redirect()->route('admin.auth.login');
    }
}