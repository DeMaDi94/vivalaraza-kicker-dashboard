<?php

namespace App\Http\Components\Season\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Season;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeasonGameDayManagementController extends Controller
{

    public function store(Request $request, int $seasonId)
    {
        $season = Season::findOrFail($seasonId);
        $season->gameDays()->create(['game_day_number' => $request['game_day_number']]);

        return to_route('season.show', ['seasonId' => $seasonId]);
    }

}
