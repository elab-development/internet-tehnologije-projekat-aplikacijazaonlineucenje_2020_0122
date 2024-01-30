<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PurchasedController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\UserPurchesedController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/roles',[RoleController::class, 'index']);
Route::get('/roles/{id}',[RoleController::class, 'show']);

Route::resource('courses',CourseController::class);
Route::resource('purchaseds',PurchasedController::class);
Route::resource('users',UserController::class);
Route::resource('lessons',LessonController::class);

//Nested
//Route::get('/users/{id}/purchaseds',[UserPurchesedController::class,'index'])->name('users.purchaseds.index');
Route::resource('users.purchaseds',UserPurchesedController::class)->only(['index']);
