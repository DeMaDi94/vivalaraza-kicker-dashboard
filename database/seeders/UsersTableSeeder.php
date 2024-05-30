<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'User1',
            'email' => 'dennisdisselhoff@hotmail.de',
            'password' => bcrypt('password'),
        ]);
    }
}
