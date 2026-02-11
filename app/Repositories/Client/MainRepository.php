<?php

namespace App\Repositories\Client;

use App\Interfaces\Client\MainRepositoryInterface;

use App\Models\User;
use Inertia\Inertia;

class MainRepository implements MainRepositoryInterface{

    public function dashboard() {
       
        return Inertia::render('client/dashboard');
    }
    
}