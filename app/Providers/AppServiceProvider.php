<?php

namespace App\Providers;

use App\Http\Components\Game\GameCreatedEvent;
use App\Http\Components\Player\GameCreatedListener;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Event::listen(
            GameCreatedEvent::class,
            GameCreatedListener::class,
        );
    }
}
