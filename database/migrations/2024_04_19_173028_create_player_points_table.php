<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('player_points', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('points');
            $table->unsignedDecimal('cash', 8, 1);
            $table->foreignId('player_id');
            $table->foreignId('season_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_points');
    }
};
