<?php

namespace App\Listeners;

use App\Events\UserRegisterEvent;
use App\Notifications\UserRegisterNotification;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class UserAccountRegisterListener implements ShouldQueue
{
    use InteractsWithQueue;
    /**
     * Handle the event.
     */
    public function handle(UserRegisterEvent $event)
    {
        Mail::to($event->user->email)->send(
            new UserRegisterNotification($event->user)
        );
    }
}