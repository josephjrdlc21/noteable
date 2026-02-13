<?php

namespace App\Repositories\Client;

use App\Interfaces\Client\MainRepositoryInterface;

use App\Models\User;

class MainRepository implements MainRepositoryInterface{

    public function dashboard() {
       
        return inertia('client/dashboard');
    }
    
}