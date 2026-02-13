<?php

namespace Database\Seeders\FactorySeeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Note;

class NoteFactorySeeder extends Seeder{

    /**
     * Run the database seeds.
    */
    public function run(): void
    {
       Note::factory(50)->create();
    }
}