<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role1 = \App\Models\Role::create(['role_name'=> "administrator"]);
        $role2 = \App\Models\Role::create(['role_name'=> "predavac"]);
        $role3 = \App\Models\Role::create(['role_name'=> "korisnik"]);
        \App\Models\User::factory(10)->create();
        \App\Models\Course::factory(10)->create();
        \App\Models\Purchased::factory(10)->create();
        \App\Models\Lesson::factory(10)->create();
        
    }
}
