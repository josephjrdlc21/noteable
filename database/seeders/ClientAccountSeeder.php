<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;

class ClientAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $client = User::where('email', 'johndoe@gmail.com')->first();

        if(!$client) {
            $account = new User;
            $account->name = "John Doe";
            $account->email = "johndoe@gmail.com";
            $account->email_verified_at = now();
            $account->status = "active";
            $account->password = bcrypt("Aa@12345");
            $account->save();
        }
    }
}
