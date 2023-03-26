<?php

namespace App\Http\Requests;

use App\Facades\Cart;
use Closure;
use Illuminate\Foundation\Http\FormRequest;

class AddCartItemRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'product_id' => ['required', 'exists:products,id'],
            'quantity' => ['required', 'integer', function (string $attribute, mixed $value, Closure $fail) {
                $item = Cart::getItem($this->request->get('product_id'));

                if ($item) {
                    $maxQuantity = config('custom.max_product_quantity');
                    if ($item['quantity'] + $value > $maxQuantity) {
                        $fail("The max $attribute for any product is $maxQuantity.");
                    }
                }
            },],
        ];
    }
}
