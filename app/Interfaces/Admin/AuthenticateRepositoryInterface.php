<?php

namespace App\Interfaces\Admin;

interface AuthenticateRepositoryInterface {
    
    public function login();
    public function authenticate(array $data);
    public function logout();
}