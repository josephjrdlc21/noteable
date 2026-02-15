<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Admin;

class AdminAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $client = Admin::where('email', 'admin@gmail.com')->first();

        if(!$client) {
            $account = new Admin;
            $account->name = "Super Admin";
            $account->email = "admin@gmail.com";
            $account->email_verified_at = now();
            $account->status = "active";
            $account->password = bcrypt("Aa@12345");
            $account->save();
        }
    }
}
