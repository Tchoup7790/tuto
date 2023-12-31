<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('/login')->controller(AuthController::class)->group( function () {
    Route::get('/','login')->name('auth.login');
    Route::delete('/','logout')->name('auth.logout');
    Route::post('/','doLogin');
});


Route::prefix('/blog')->name('blog.')->controller(BlogController::class)->group( function ()
{
    Route::get('/', "index")->name('index');


    Route::prefix('/new')->group(function () {
        Route::get('', "create")->name('create')->middleware("auth");
        Route::post('', "store");
    });

    Route::prefix('/{slug}-{post}/edit')
        ->where([
        'post'=>'[0-9]+',
        'slug' => '[a-z0-9\-]+'
        ])
        ->middleware("auth")
        ->group( function (){
        Route::get('', 'edit')->name('edit');
        Route::patch('', 'update');
    });

    Route::get('/{slug}-{post}','show')->where([
        'post' => '[0-9]+',
        'slug' => '[a-z0-9\-]+'
    ])->name('show');
});

