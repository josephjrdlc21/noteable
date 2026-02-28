<?php

namespace App\Interfaces\Admin;

interface NoteRepositoryInterface {
    
    public function index(array $data);
    public function destroy(int $id);
    public function show(int $id);
}