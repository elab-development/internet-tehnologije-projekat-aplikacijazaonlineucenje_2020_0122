<?php
// ovo je pravi prvi domaci
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PurchasedController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\UserPurchesedController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CourseLessonController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\LessonMaterialController;
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



//Nested
//Route::get('/users/{id}/purchaseds',[UserPurchesedController::class,'index'])->name('users.purchaseds.index');
Route::resource('users.purchaseds',UserPurchesedController::class)->only(['index']);

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);

Route::get('/lesson/{lesson_id}/materials', [LessonMaterialController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
    Route::middleware(['isAdmin'])->group(function () {//proverava da li je user a admin da bi pristupio rutama
        
        Route::put('/users/{id}/block', [UserController::class, 'blockUser']);
        Route::resource('users',UserController::class);
        Route::get('/userspg', [UserController::class, 'indexPagination']); //paginacija
        
    });

    Route::middleware(['isTeacher'])->group(function () {//proverava da li je user a predavac da bi pristupio rutama
        
       Route::resource('courses', CourseController::class)->only(['update','store','destroy']);
        Route::resource('lessons',LessonController::class);
    });
    Route::resource('materials', MaterialController::class);
    Route::resource('course.lesson', CourseLessonController::class);
    // API route for logout user
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/download/{fileName}', [MaterialController::class, 'download'])->name('download');
});

Route::resource('courses', CourseController::class)->only('index');