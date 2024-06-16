<?php

namespace App\Http\Components\Round;

use App\Models\Game;
use App\Models\PlayerPoint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class RoundCreateService
{

    public function store(int $game_id, Request $request): void
    {
        $game = Game::findOrFail($game_id);
        $rounds_count = $game->rounds->count();

        $round = $game->rounds()->create(
            ['round_number' => $rounds_count + 1]
        );

        foreach ($request->all() as $player) {
            PlayerPoint::create(['player_id' => $player['id'], 'round_id' => $round->id, 'points' => $player['value']]);
        }

    }

}
