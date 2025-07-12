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
            return redirect('/surat');
        });
        Route::get('/login', [AuthController::class, 'loginWeb'])->name('login');
        Route::middleware('auth:sanctum')->group(function () {
            Route::inertia('/surat', 'Surat');
            Route::inertia('/murid', 'Murid');
            Route::inertia('/pengguna', 'Pengguna');
            Route::inertia('/settings', 'Settings');
        });
    }
);
