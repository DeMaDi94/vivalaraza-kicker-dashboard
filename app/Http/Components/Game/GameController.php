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

    public function index(GameListService $list_service): Response
    {
        $games = $list_service->list();

        return Inertia::render('Dashboard', [
            'games' => $games,
        ]);
    }

    public function Store(GameCreateService $create_service, Request $request)
    {
        $create_service->store($request);

        return to_route('dashboard');
    }

    public function Show(GameShowService $show_service, int $game_id)
    {
        $data = $show_service->show($game_id);

        return Inertia::render('Game', $data);
    }

}
