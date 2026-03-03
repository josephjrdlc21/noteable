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

        // Admin Repositories
        $this->app->bind(\App\Interfaces\Admin\MainRepositoryInterface::class,\App\Repositories\Admin\MainRepository::class);
        $this->app->bind(\App\Interfaces\Admin\AuthenticateRepositoryInterface::class,\App\Repositories\Admin\AuthenticateRepository::class);
        $this->app->bind(\App\Interfaces\Admin\UserRepositoryInterface::class,\App\Repositories\Admin\UserRepository::class);
        $this->app->bind(\App\Interfaces\Admin\ClientRepositoryInterface::class,\App\Repositories\Admin\ClientRepository::class);
        $this->app->bind(\App\Interfaces\Admin\NoteRepositoryInterface::class,\App\Repositories\Admin\NoteRepository::class);
        $this->app->bind(\App\Interfaces\Admin\ProfileRepositoryInterface::class,\App\Repositories\Admin\ProfileRepository::class);
    }
}