<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CartItem extends Model
{
    use HasFactory;

    protected $casts = [
        'quantity' => 'integer',
    ];

    protected $guarded = [];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function subTotal(): Attribute
    {
        return Attribute::make(
            get: fn(mixed $value, array $attributes) => $this->product->price * $attributes['quantity'],
        );
    }
}
