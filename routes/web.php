<?php

use App\Http\Controllers\ShopController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ShopController::class, 'index'])->name('shop');
Route::get('/product/{product}', [ShopController::class, 'view'])->name('product');
Route::post('/cart', [ShopController::class, 'add'])->name('add');
Route::post('/update', [ShopController::class, 'update'])->name('update');
Route::post('/remove', [ShopController::class, 'remove'])->name('remove');
Route::get('/cart', [ShopController::class, 'cart'])->name('cart');
