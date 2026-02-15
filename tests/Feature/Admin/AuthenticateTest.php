<?php

use App\Models\Admin;

use Inertia\Testing\AssertableInertia as Assert;

test('login page', function () {

    $this->withMiddleware()
        ->get(route('admin.auth.login'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/auth/login');
        });
});

test('authenticate admin credentials', function () {

    $admin = Admin::factory()->auth()->create();

    $login_admin = [
        'email' => $admin->email,
        'password' => 'Aa@12345',
    ];

    $this->withMiddleware()
        ->post(route('admin.auth.authenticate'), $login_admin)
        ->assertRedirect(route('admin.dashboard'));

    $this->assertAuthenticatedAs($admin, 'admin');
});

test('logout admin', function () {
    
    $admin = Admin::factory()->auth()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.auth.logout'))
        ->assertRedirect(route('admin.auth.login'));

    $this->assertGuest('admin');
});