<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PlayerPoint extends Model
{
    use HasFactory;

    protected $table = 'player_points';
    protected $fillable = [
        'points',
        'player_id',
        'season_id'
    ];

    public function player(): BelongsTo
    {
        return $this->belongsTo(Player::class);
    }

}
