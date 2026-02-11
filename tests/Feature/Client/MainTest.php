<?php

use Inertia\Testing\AssertableInertia as Assert;

use App\Models\User;

test('get dashboard page', function () {

    $user = User::factory()->create();

    $this->withMiddleware()
        ->actingAs($user, 'web')
        ->get(route('client.dashboard'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('client/dashboard');
        });
});