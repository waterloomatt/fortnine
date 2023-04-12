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
            'name' => fake()->company(),
            'description' => fake()->text(),
            'price' => fake()->randomFloat(2, 10, 100),
            'image_url' => fake()->randomElement([
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Bottle.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Boxing.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Buoy.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Commodore64.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Cup.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-LaserTowardsMilkyWaysCentre.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Matchbox.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-MeasuringTape.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Minifigs1.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Rocker.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-SewingMachine.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Stopwatch.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-ToyBoat.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-ToyTruck.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Windflower.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-WindRose.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-WinterScene.jpg',
                'http://img.dummy-image-generator.com/objects/dummy-300x300-Zipper.jpg',
            ])
        ];
    }
}
