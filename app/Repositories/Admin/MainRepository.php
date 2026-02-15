<?php

namespace App\Repositories\Admin;

use App\Interfaces\Admin\MainRepositoryInterface;

use App\Models\Admin;

class MainRepository implements MainRepositoryInterface{

    public function dashboard() {
       
        return inertia('admin/dashboard');
    }
    
}