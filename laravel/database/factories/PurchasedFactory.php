<?php

namespace Database\Factories;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Purchased>
 */
class PurchasedFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userIDs = DB::table('users')->pluck('id');
        $courseIDs= DB::table('courses')->pluck('id');
        return [

            'user_id' => $this->faker->randomElement($userIDs),
            'course_id' => $this->faker->randomElement($courseIDs),
            'payment_method' => $this->faker->randomElement(['PayPal', 'Credit Card', 'Bank Transfer']),
        ];
    }
}
