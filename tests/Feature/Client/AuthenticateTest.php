<?php

use App\Models\User;

use Inertia\Testing\AssertableInertia as Assert;

test('login page', function () {

    $this->withMiddleware()
        ->get(route('client.auth.login'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('client/auth/login');
        });
});

test('authenticate client credentials', function () {

    $client = User::factory()->auth()->create();

    $login_client = [
        'email' => $client->email,
        'password' => 'Aa@12345',
    ];

    $this->withMiddleware()
        ->post(route('client.auth.authenticate'), $login_client)
        ->assertRedirect(route('client.dashboard'));

    $this->assertAuthenticatedAs($client, 'web');
});

test('logout user', function () {
    
    $client = User::factory()->auth()->create();

    $this->withMiddleware()
        ->actingAs($client, 'web')
        ->get(route('client.auth.logout'))
        ->assertRedirect(route('client.auth.login'));

    $this->assertGuest('web');
});