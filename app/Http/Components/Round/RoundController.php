<?php

namespace App\Http\Components\Round;

use App\Http\Components\Round\RoundCreateService;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;


class RoundController extends Controller
{

    public function Store(RoundCreateService $create_service, Request $request, int $game_id): RedirectResponse
    {
        $create_service->store($game_id, $request);

        return to_route("game", ['gameId' => $game_id]);
    }


}
