<?php

namespace Database\Factories;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lesson>
 */
class LessonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     

    public function definition(): array
    {
        $courseIDs = DB::table('courses')->pluck('id');
        return [
            'title' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'course_id' => $this->faker->randomElement($courseIDs),
        ];
    }
}
