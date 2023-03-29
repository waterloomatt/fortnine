<?php

namespace App\Events;

use App\Models\Cart;

class CartUpdated
{
    public function __construct(public Cart $cart)
    {
    }
}
