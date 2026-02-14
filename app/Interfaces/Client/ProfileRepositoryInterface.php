<?php

namespace App\Interfaces\Client;

interface ProfileRepositoryInterface {
    
    public function index(array $data);
    public function update(int $id, array $data);
}