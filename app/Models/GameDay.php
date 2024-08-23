<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GameDay extends Model
{
    use HasFactory;

    protected $fillable = [
        'game_day_number',
    ];

    public function seasons(): BelongsTo
    {
        return $this->belongsTo(Season::class);
    }
}
