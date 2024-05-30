<?php

namespace App\Http\Components\Game;

use App\Models\Game;
use Illuminate\Http\Request;


class GameCreateService
{

    public function store(Request $request)
    {
        $game = Game::create(
            $request->validate([
                'name' => ['required', 'max:255'],
                'player_one' => ['required', 'max:255'],
                'player_two' => ['required', 'max:255'],
                'player_three' => ['required', 'max:255'],
                'player_four' => ['required', 'max:255'],
            ])
        );

        GameCreatedEvent::dispatch($game, [
            'player_one' => $request['player_one'],
            'player_two' => $request['player_two'],
            'player_three' => $request['player_three'],
            'player_four' => $request['player_four'],
        ]);
    }

}
