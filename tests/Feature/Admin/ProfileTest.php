<?php

use Inertia\Testing\AssertableInertia as Assert;

use App\Models\Admin;

test('get profile page', function () {

    $admin = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'web')
        ->get(route('admin.profile.index'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/profile/index');
        });
});

test('update profile details', function () {

    $admin = Admin::factory()->create();

    $update_details = [
        'name' => "New Name",
    ];

    $this->withMiddleware()
        ->actingAs($admin, 'web')
        ->post(route('admin.profile.update', $admin->id), $update_details)
        ->assertRedirect(route('admin.profile.index'));

    $admin->refresh();

    expect($admin)
        ->name->toBe($update_details['name']);
});