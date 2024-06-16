<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Round extends Model
{
    use HasFactory;

    protected $fillable = [
        'round_number',
        'game_id',
    ];

    public function playerPoints(): HasMany
    {
        return $this->hasMany(PlayerPoint::class)->with('player');
    }

}
