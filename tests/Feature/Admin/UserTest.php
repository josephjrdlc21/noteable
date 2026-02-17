<?php

use Inertia\Testing\AssertableInertia as Assert;

use App\Models\Admin;

test('get users list page', function () {

    $admin = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.users.index'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/users/index');
        });
});