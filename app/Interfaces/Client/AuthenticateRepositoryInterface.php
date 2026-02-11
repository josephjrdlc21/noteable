<?php

namespace App\Interfaces\Client;

interface AuthenticateRepositoryInterface {
    
    public function login();
    public function authenticate(array $data);
    public function logout();
}