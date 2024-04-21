<?php

namespace App\Http\Components\Player;

use App\Models\Game;
use Illuminate\Http\Request;


class PlayerCreateService
{

    public function store(Game $game, string $player)
    {
        $game->players()->create(
            ['name' => $player]
        );
    }

}
