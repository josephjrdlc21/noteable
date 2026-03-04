<?php

use App\Models\User;

use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Support\Str;

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

test('user registration page', function () {
    $this->withMiddleware()
        ->get(route('client.auth.register'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('client/auth/register');
        });
}); 

test('user register user account', function () {

    $register_client = [
        'name' => "Juan De La Cruz",
        'email' => "juandelacruz@gmail.com",
        'password' => "Aa@12345",
    ];

    $this->withMiddleware()
        ->post(route('client.auth.store_register'), $register_client)
        ->assertRedirect(route('client.auth.verify'));

    $client = User::where('email', $register_client['email'])->first();

    expect($client)->not()->toBeNull()
        ->name->toBe($register_client['name'])
        ->email->toBe($register_client['email']);
}); 

test('user verify page', function () {

    $token = Str::random(60);

    User::factory()->unverified()->create([
        'token' => $token,
    ]);

    $this->withMiddleware()
        ->get(route('client.auth.verify', ['token' => $token]))
        ->assertOk()
        ->assertInertia(fn (Assert $page) =>
            $page->component('client/auth/verify')
        );
}); 

test('user verify account', function () {

    $token = Str::random(60);
    $code = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);
    $expire_at = now()->addMinutes(10);

    $client = User::factory()->unverified()->create([
        'otp' => $code,
        'otp_expires_at' => $expire_at,
        'token' => $token,
    ]);

    $verify_data = [
        'otp' => $code
    ];

    $this->withMiddleware()
        ->post(route('client.auth.store_verify', ['token' => $token]), $verify_data)
        ->assertRedirect(route('client.dashboard'));

    $client->refresh();

    expect($client->email_verified_at)->not()->toBeNull();

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