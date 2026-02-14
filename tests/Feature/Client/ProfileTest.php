<?php

use Inertia\Testing\AssertableInertia as Assert;

use App\Models\User;

test('get profile page', function () {

    $user = User::factory()->create();

    $this->withMiddleware()
        ->actingAs($user, 'web')
        ->get(route('client.profile.index'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('client/profile/index');
        });
});

test('update profile details', function () {

    $user = User::factory()->create();

    $update_details = [
        'name' => "New Name",
    ];

    $this->withMiddleware()
        ->actingAs($user, 'web')
        ->post(route('client.profile.update', $user->id), $update_details)
        ->assertRedirect(route('client.profile.index'));

    $user->refresh();

    expect($user)
        ->name->toBe($update_details['name']);
});