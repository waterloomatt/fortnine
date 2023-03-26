<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\CartItem;

class CartService
{
    public function __construct(protected Cart $cart)
    {
        $sessionId = session()->getId();

        $this->cart = Cart::firstOrCreate(
            ['session_id' => $sessionId],
            ['session_id' => $sessionId, 'total' => 0]
        );
    }

    public function getItemCount()
    {
        return $this->cart->items->sum('quantity');
    }

    public function getItems()
    {
        return $this->cart->items->map(function (CartItem $item) {
            return [
                'id' => $item->product->id,
                'name' => $item->product->name,
                'quantity' => $item->quantity,
                'price' => $item->product->price,
                'image_url' => $item->product->image_url
            ];
        });
    }

    public function getItem(int $productId): ?array
    {
        return collect($this->getItems())
            ->first(fn(array $item) => $item['id'] === $productId);
    }

    public function add($id, $quantity): void
    {
        $cartItem = CartItem::firstOrCreate(
            ['cart_id' => $this->cart->id, 'product_id' => $id],
            [
                'cart_id' => $this->cart->id,
                'product_id' => $id,
                'quantity' => $quantity,
            ]
        );

        if (!$cartItem->wasRecentlyCreated) {
            $cartItem->increment('quantity', $quantity);
        }
    }

    public function update(string $id, int $quantity): void
    {
        $this->cart
            ->items()
            ->where('product_id', $id)
            ->update(['quantity' => $quantity]);
    }

    public function remove(string $id): void
    {
        $this->cart
            ->items()
            ->where('product_id', $id)
            ->delete();
    }
}