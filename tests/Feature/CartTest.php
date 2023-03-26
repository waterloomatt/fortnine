<?php


use App\Models\Cart;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CartTest extends TestCase
{
    use RefreshDatabase;

    public function test_shop_page_is_displayed(): void
    {
        $response = $this
            ->get('/');

        $response->assertOk();
    }

    public function test_product_page_is_displayed(): void
    {
        $product = Product::factory()->create();

        $response = $this
            ->get('/product/' . $product->id);

        $response->assertOk();
    }

    public function test_cart_page_is_displayed(): void
    {
        $response = $this
            ->get('/cart');

        $response->assertOk();
    }

    public function test_product_can_be_added_to_cart(): void
    {
        $product = Product::factory()->create();

        $response = $this
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 1,
            ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect('/product/' . $product->id);

        $sessionId = session()->getId();
        $cart = Cart::where('session_id', $sessionId)->first();

        $this->assertModelExists($cart);
        $this->assertCount(1, $cart->items);
        $this->assertEquals($product->id, $cart->items->first()->product_id);
    }

    public function test_product_can_be_removed_from_cart(): void
    {
        $product = Product::factory()->create();

        $response = $this
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 1,
            ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect('/product/' . $product->id);

        $sessionId = session()->getId();
        $cart = Cart::where('session_id', $sessionId)->first();

        $cartItem = $cart->items->first();

        $this->assertModelExists($cart);
        $this->assertCount(1, $cart->items);
        $this->assertEquals($product->id, $cartItem->product_id);

        $response = $this
            ->post('/remove', [
                'product_id' => $product->id,
            ]);

        $response->assertSessionHasNoErrors();

        $cart->refresh();

        $this->assertModelMissing($cartItem);
        $this->assertCount(0, $cart->items);
    }

    public function test_quantity_can_be_updated_in_cart(): void
    {
        $product = Product::factory()->create();

        $this
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 1,
            ]);

        $sessionId = session()->getId();
        $cart = Cart::where('session_id', $sessionId)->first();

        $cartItem = $cart->items->first();

        $this->assertModelExists($cart);
        $this->assertEquals(1, $cartItem->quantity);
        $this->assertEquals($product->id, $cartItem->product_id);

        $response = $this
            ->post('/update', [
                'product_id' => $product->id,
                'quantity' => 5,
            ]);

        $response->assertSessionHasNoErrors();

        $cartItem->refresh();

        $this->assertEquals(5, $cartItem->quantity);
    }

    public function test_quantity_is_incremented_in_cart(): void
    {
        $product = Product::factory()->create();

        $this
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 1,
            ]);

        $sessionId = session()->getId();
        $cart = Cart::where('session_id', $sessionId)->first();

        $cartItem = $cart->items->first();

        $this->assertModelExists($cart);
        $this->assertEquals(1, $cartItem->quantity);
        $this->assertEquals($product->id, $cartItem->product_id);

        $this
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 1,
            ]);

        $cartItem->refresh();

        $this->assertEquals(2, $cartItem->quantity);
    }
}
