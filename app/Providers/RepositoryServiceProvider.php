<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Client Repositories
        $this->app->bind(\App\Interfaces\Client\MainRepositoryInterface::class,\App\Repositories\Client\MainRepository::class);
        $this->app->bind(\App\Interfaces\Client\AuthenticateRepositoryInterface::class,\App\Repositories\Client\AuthenticateRepository::class);
        $this->app->bind(\App\Interfaces\Client\NoteRepositoryInterface::class,\App\Repositories\Client\NoteRepository::class);
        $this->app->bind(\App\Interfaces\Client\ProfileRepositoryInterface::class,\App\Repositories\Client\ProfileRepository::class);
    }
}