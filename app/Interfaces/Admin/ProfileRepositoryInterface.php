<?php

namespace App\Interfaces\Admin;

interface ProfileRepositoryInterface {
    
    public function index(array $data);
    public function update(int $id, array $data);
}