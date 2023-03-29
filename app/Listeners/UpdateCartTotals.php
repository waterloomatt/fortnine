<?php

namespace App\Listeners;

use App\Events\CartUpdated;

class UpdateCartTotals
{
    public function handle(CartUpdated $event): void
    {
        $cart = $event->cart;
        $cart->refresh();

        $taxRate = array_sum(config('constants.tax'));

        $subTotal = $cart->items->sum('sub_total');
        $tax = $subTotal * $taxRate;
        $total = $subTotal * (1 + $taxRate);

        $cart->update([
            'sub_total' => $subTotal,
            'tax' => $tax,
            'total' => $total,
        ]);
    }
}
