<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PurchasedController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\UserPurchesedController;
use App\Http\Controllers\API\AuthController;

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

//Route::resource('courses',CourseController::class);
Route::resource('purchaseds',PurchasedController::class);

Route::resource('lessons',LessonController::class);

//Nested
//Route::get('/users/{id}/purchaseds',[UserPurchesedController::class,'index'])->name('users.purchaseds.index');
Route::resource('users.purchaseds',UserPurchesedController::class)->only(['index']);

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
    Route::resource('courses', CourseController::class)->only(['update','store','destroy']);

    Route::resource('users',UserController::class);
    Route::get('/userspg', [UserController::class, 'indexPagination']); //paginacija
    // API route for logout user
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::resource('courses', CourseController::class)->only('index');