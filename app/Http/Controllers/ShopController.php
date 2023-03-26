<?php

namespace App\Http\Controllers;

use App\Facades\Cart;
use App\Http\Requests\AddCartItemRequest;
use App\Http\Requests\RemoveCartItemRequest;
use App\Http\Requests\UpdateCartItemRequest;
use App\Models\Product;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        return Inertia::render('Shop', [
            'products' => Product::paginate(config('constants.page_size')),
        ]);
    }

    public function view(Product $product)
    {
        return Inertia::render('Product', [
            'product' => $product,
        ]);
    }

    public function cart()
    {
        return Inertia::render('Cart', [
            'cart' => Cart::getItems(),
        ]);
    }

    public function add(AddCartItemRequest $request)
    {
        $validated = $request->validated();

        Cart::add($validated['product_id'], $validated['quantity']);

        return back()->withInput();
    }

    public function remove(RemoveCartItemRequest $request)
    {
        $validated = $request->validated();

        Cart::remove($validated['product_id']);
    }

    public function update(UpdateCartItemRequest $request)
    {
        $validated = $request->validated();

        Cart::update($validated['product_id'], $validated['quantity']);
    }
}
