<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('player_points', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('points');
            $table->unsignedBigInteger('player_id');
            $table->unsignedBigInteger('round_id');
            $table->foreign('player_id')->references('id')->on('players');
            $table->foreign('round_id')->references('id')->on('rounds');
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
