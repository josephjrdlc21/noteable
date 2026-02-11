<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class MiddlewareServiceProvider extends ServiceProvider
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
        $router = $this->app['router'];
        $router->aliasMiddleware('client.auth', \App\Http\Middlewares\Client\Authenticate::class);
        $router->aliasMiddleware('client.guest', \App\Http\Middlewares\Client\RedirectIfAuthenticated::class);
        $router->aliasMiddleware('admin.auth', \App\Http\Middlewares\Admin\Authenticate::class);
        $router->aliasMiddleware('admin.guest', \App\Http\Middlewares\Admin\RedirectIfAuthenticated::class);
        $router->aliasMiddleware('throttle', \Illuminate\Routing\Middleware\ThrottleRequests::class);
    }
}