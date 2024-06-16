<?php

namespace App\Http\Components\Game;

use App\Models\Game;
use Illuminate\Http\Request;


class GameShowService
{

    public function show(int $id): array
    {
        $game = Game::with('roundsWithPlayerPoints')->findOrFail($id);
        return ['game' => $game, 'players' => $game->players()->get()];
    }

}
