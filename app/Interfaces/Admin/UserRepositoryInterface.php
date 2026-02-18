<?php

namespace App\Interfaces\Admin;

interface UserRepositoryInterface {
    
    public function index(array $data);
    public function create();
    public function store(array $data);
    public function edit(int $id);
    public function update(int $id, array $data);
    public function update_status(int $id);
    public function update_password(int $id);
    public function destroy(int $id);
    public function show(int $id);
}