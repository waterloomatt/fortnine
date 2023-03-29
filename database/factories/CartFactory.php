<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cart>
 */
class CartFactory extends Factory
{
    public function definition(): array
    {
        return [
            'session_id' => fake()->uuid(),
            'sub_total' => 0,
            'tax' => 0,
            'total' => 0,
        ];
    }
}
