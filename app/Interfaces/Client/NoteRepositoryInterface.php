<?php

namespace App\Interfaces\Client;

interface NoteRepositoryInterface {
    
    public function index(array $data);
    public function store(array $data);
    public function edit(int $id);
    public function update(int $id, array $data);
    public function destroy(int $id);
}