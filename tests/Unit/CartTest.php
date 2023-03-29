<?php

namespace Tests\Unit;

use App\Facades\Cart as CartService;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Config;
use Tests\TestCase;

class CartTest extends TestCase
{
    use RefreshDatabase;

    public function test_cart_totals_are_correct(): void
    {
        Config::set('constants.tax', ['qst' => 0.01, 'gst' => 0.01]);

        $product = Product::factory()->create(['price' => 9.99]);

        CartService::add($product->id, 8);

        $this->assertEquals(79.92, CartService::getCart()->sub_total);
        $this->assertEquals(1.60, CartService::getCart()->tax);
        $this->assertEquals(81.52, CartService::getCart()->total);
    }
}
