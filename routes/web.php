<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome');

Route::view('game', 'app')
    ->middleware(['auth', 'verified'])
    ->name('game');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__.'/auth.php';
