<?php

namespace App\Repositories\Admin;

use App\Interfaces\Admin\UserRepositoryInterface;

use App\Models\Admin;

class UserRepository implements UserRepositoryInterface{

    public function index(array $data) {
        $data['records'] = Admin::latest()->paginate($data['per_page'])->withQueryString();
       
        return inertia('admin/users/index', $data);
    }
    
}