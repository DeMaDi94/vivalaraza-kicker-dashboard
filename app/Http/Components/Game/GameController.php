<?php

namespace App\Http\Components\Game;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Game;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class GameController extends Controller
{

    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'games' => Game::with('players')->get(),
        ]);
    }

    public function Store(GameCreateService $create_service, Request $request)
    {
        $create_service->store($request);

        return to_route('dashboard');
    }

}
