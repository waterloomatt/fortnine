<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CartItem>
 */
class CartItemFactory extends Factory
{
    public function definition(): array
    {
        return [
            'cart_id' => fake()->numberBetween(1, 99999),
            'product_id' => fake()->numberBetween(1, 99999),
            'quantity' => fake()->numberBetween(1, 10),
        ];
    }
}
