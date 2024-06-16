<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function players(): HasMany
    {
        return $this->hasMany(Player::class);
    }

    public function rounds(): HasMany
    {
        return $this->hasMany(Round::class);
    }

    public function roundsWithPlayerPoints(): HasMany
    {
        return $this->rounds()->with('playerPoints');
    }
}
