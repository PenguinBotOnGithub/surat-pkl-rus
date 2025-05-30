<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('web')->group(
    function () {
        Route::get('/', function (Request $req) {
            if (!$req->user()) {
                return redirect('/login');
            }
            return redirect('/dashboard');
        });
        Route::get('/login', [AuthController::class, 'loginWeb']);
        Route::middleware('auth:sanctum')->group(function () {
            Route::inertia('/dashboard', 'Dashboard');
        });
    }
);
