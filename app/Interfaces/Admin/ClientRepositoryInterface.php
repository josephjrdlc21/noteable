<?php

namespace App\Interfaces\Admin;

interface ClientRepositoryInterface {
    
    public function index(array $data);
    public function update_status(int $id);
    public function destroy(int $id);
    public function show(int $id);
}