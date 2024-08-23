<?php

namespace App\Http\Components\Season\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Season;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeasonPlayerManagementController extends Controller
{

    public function store(Request $request, int $seasonId)
    {
        $season = Season::findOrFail($seasonId);
        $season->players()->create(['name' => $request['player_name']]);
        return to_route('season.show', ['seasonId' => $seasonId]);
    }

}
