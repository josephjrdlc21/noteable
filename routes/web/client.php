<?php

use Illuminate\Support\Facades\Route;
$namespace = "App\Http\Controllers\Client";

Route::group(['as' => "client.", 'namespace' => $namespace], function() {

    Route::group(['as' => "auth."], function () {
        Route::get('login', ['as' => "login", 'uses' => "AuthenticateController@login", 'middleware' => "client.guest"]);
        Route::post('authenticate', ['as' => "authenticate", 'uses' => "AuthenticateController@authenticate", 'middleware' => "client.guest"]);
        Route::get('logout', ['as' => "logout", 'uses' => "AuthenticateController@logout", 'middleware' => "client.auth"]);
    });

    Route::group(['middleware' => "client.auth"], function () {
        Route::get('dashboard', ['as' => "dashboard", 'uses' => "MainController@dashboard"]);

        Route::group(['prefix' => "notes", 'as' => "notes."], function () {
        });
    });
});