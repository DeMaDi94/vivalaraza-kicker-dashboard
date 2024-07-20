<?php

namespace App\Http\Components\Season\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Season;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeasonManagementController extends Controller
{

    public function index()
    {
        $seasons = Season::all();

        return Inertia::render('Dashboard', ['seasons' => $seasons]);
    }

    public function store(Request $request)
    {
        Season::create(['year' => $request['year']]);
        to_route('dashboard');
    }
}
