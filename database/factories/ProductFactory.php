<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->text(),
            'price' => fake()->randomFloat(2, 10, 100),
            'image_url' => fake()->randomElement([
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=8B7BCDC2',
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=500B67FB',
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=A89D0DE6',
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=225E6693',
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=9D9539E7',
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=BDC01094',
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=7F5AE56A',
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=4F32C4CF',
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=B0E33EF4',
                'https://api.lorem.space/image/furniture?w=300&h=300&hash=2D297A22',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=8B7BCDC2',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=500B67FB',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=A89D0DE6',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=225E6693',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=9D9539E7',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=BDC01094',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=7F5AE56A',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=4F32C4CF',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=B0E33EF4',
                'https://api.lorem.space/image/watch?w=300&h=300&hash=2D297A22',
                'https://api.lorem.space/image?w=300&h=300&hash=8B7BCDC2',
                'https://api.lorem.space/image?w=300&h=300&hash=500B67FB',
                'https://api.lorem.space/image?w=300&h=300&hash=A89D0DE6',
                'https://api.lorem.space/image?w=300&h=300&hash=225E6693',
                'https://api.lorem.space/image?w=300&h=300&hash=9D9539E7',
                'https://api.lorem.space/image?w=300&h=300&hash=BDC01094',
                'https://api.lorem.space/image?w=300&h=300&hash=7F5AE56A',
                'https://api.lorem.space/image?w=300&h=300&hash=4F32C4CF',
                'https://api.lorem.space/image?w=300&h=300&hash=B0E33EF4',
                'https://api.lorem.space/image?w=300&h=300&hash=2D297A22',
            ])
        ];
    }
}
