<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginFormRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function loginWeb()
    {
        if (Auth::check()) {
            return redirect()->intended('/dashboard');
        } else {
            return Inertia::render('Login');
        }
    }

    public function login(LoginFormRequest $req)
    {
        if (Auth::attempt([
            'username' => $req->username,
            'password' => $req->password
        ])) {
            $req->session()->regenerate();

            $referer = $req->header('Referer');
            if (str_ends_with($referer, '/login')) {
                var_dump($referer);
                return redirect('/');
            } else {
                return redirect()->back();
            }
        }

        throw ValidationException::withMessages(['password' => 'Password salah']);
    }
}
