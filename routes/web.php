<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
$namespace = "App\Http\Controllers\Client";
$admin_namespace = "App\Http\Controllers\Admin";

Route::get('/', function () { return Inertia::render('welcome'); })->name('home');

Route::group(['as' => "client.", 'namespace' => $namespace], function() {

    Route::group(['as' => "auth."], function () {
        Route::get('login', ['as' => "login", 'uses' => "AuthenticateController@login", 'middleware' => "client.guest"]);
        Route::post('authenticate', ['as' => "authenticate", 'uses' => "AuthenticateController@authenticate", 'middleware' => "client.guest"]);
        Route::get('logout', ['as' => "logout", 'uses' => "AuthenticateController@logout", 'middleware' => "client.auth"]);
    });

    Route::group(['middleware' => "client.auth"], function () {
        Route::get('dashboard', ['as' => "dashboard", 'uses' => "MainController@dashboard"]);

        Route::group(['prefix' => "notes", 'as' => "notes."], function () {
            Route::get('/', ['as' => "index", 'uses' => "NoteController@index"]);
            Route::post('store', ['as' => "store", 'uses' => "NoteController@store"]);
            Route::get('edit/{id?}', ['as' => "edit", 'uses' => "NoteController@edit"]);
            Route::post('update/{id?}', ['as' => "update", 'uses' => "NoteController@update"]);
            Route::get('show/{id?}', ['as' => "show", 'uses' => "NoteController@show"]);
            Route::any('delete/{id?}', ['as' => "delete", 'uses' => "NoteController@destroy"]);
        });

        Route::group(['prefix' => "profile", 'as' => "profile."], function () {
            Route::get('/', ['as' => "index", 'uses' => "ProfileController@index"]);
            Route::post('{id?}', ['as' => "update", 'uses' => "ProfileController@update"]);
        });
    });
});

Route::group(['prefix' => "admin", 'as' => "admin.", 'namespace' => $admin_namespace], function() {

    Route::group(['as' => "auth."], function () {
        Route::get('login', ['as' => "login", 'uses' => "AuthenticateController@login", 'middleware' => "admin.guest"]);
        Route::post('authenticate', ['as' => "authenticate", 'uses' => "AuthenticateController@authenticate", 'middleware' => "admin.guest"]);
        Route::get('logout', ['as' => "logout", 'uses' => "AuthenticateController@logout", 'middleware' => "admin.auth"]);
    });

    Route::group(['middleware' => "admin.auth"], function () {
        Route::get('/', ['as' => "dashboard", 'uses' => "MainController@dashboard"]);
    });
});
