<?php

use Inertia\Testing\AssertableInertia as Assert;

use App\Models\{User, Admin};

test('get client list page', function () {

    $admin = Admin::factory()->create();
    $client = User::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.clients.index'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/clients/index');
        });
});

test('update client status', function () {

    $admin = Admin::factory()->create();
    $user = User::factory()->create(['status' => "active"]);

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.clients.update_status', $user->id))
        ->assertRedirect(route('admin.clients.index'));

    $user->refresh();

    expect($user->status)->toBe("inactive");
});

test ('delete client', function () {

    $admin = Admin::factory()->create();
    $user = User::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.clients.delete', $user->id))
        ->assertRedirect(route('admin.clients.index'));

    expect(User::find($user->id))->toBeNull();
});

test('get client show page', function () {

    $admin = Admin::factory()->create();
    $user = User::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.clients.show', $user->id))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/clients/show');
        });
});