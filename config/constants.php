<?php

return [
    'page_size' => env('PAGE_SIZE', '12'),
    'max_product_quantity' => env('MAX_PRODUCT_QUANTITY', '10'),
    'tax' => [
        'qst' => 0.09975,
        'gst' => 0.05,
    ]
];