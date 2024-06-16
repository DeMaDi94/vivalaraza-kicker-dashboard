<?php

namespace App\Http\Components\Game;

use App\Models\Game;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;


class GameListService
{

    public function list(): Collection
    {
        return Game::with('players')->get();
    }

}
