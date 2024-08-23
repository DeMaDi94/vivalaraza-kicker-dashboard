<?php

use App\Http\Components\Game\GameController;
use App\Http\Components\Round\RoundController;
use App\Http\Components\Season\Controllers\SeasonManagementController;
use App\Http\Components\Season\Controllers\SeasonPlayerManagementController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return 'test';
});

Route::get('/dashboard', [SeasonManagementController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/seasons', [SeasonManagementController::class, 'store'])->middleware(['auth', 'verified'])->name('season.create');
Route::get('/seasons/{seasonId}', [SeasonManagementController::class, 'show'])->middleware(['auth', 'verified'])->name('season.show');
Route::post('/seasons/{seasonId}/player', [SeasonPlayerManagementController::class, 'store'])->middleware(['auth', 'verified'])->name('season.player.create');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
