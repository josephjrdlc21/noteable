<?php

namespace Database\Seeders\FactorySeeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;

class UserFactorySeeder extends Seeder{

    /**
     * Run the database seeds.
    */
    public function run(): void
    {
       User::factory(10)->create();
    }
}