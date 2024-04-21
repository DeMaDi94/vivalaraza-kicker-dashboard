<?php

namespace App\Http\Components\Player;

use App\Http\Components\Game\GameCreatedEvent;
use Illuminate\Support\Facades\Log;

class GameCreatedListener
{
    /**
     * Create the event listener.
     */
    public function __construct(public PlayerCreateService $player_create_service)
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(GameCreatedEvent $event): void
    {
        $this->player_create_service->store($event->game, $event->players['player_one']);
        $this->player_create_service->store($event->game, $event->players['player_two']);
        $this->player_create_service->store($event->game, $event->players['player_three']);
        $this->player_create_service->store($event->game, $event->players['player_four']);

    }
}
