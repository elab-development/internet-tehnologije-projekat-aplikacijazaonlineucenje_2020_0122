<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role1 = Role::create(['Role_name'=> "administrator"]);
        $role2 = Role::create(['Role_name'=> "predavac"]);
        $role3 = Role::create(['Role_name'=> "korisnik"]);
    }
}
