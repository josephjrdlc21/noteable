<?php

use Inertia\Testing\AssertableInertia as Assert;

use App\Models\Admin;

test('get dashboard page', function () {

    $admin = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.dashboard'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/dashboard');
        });
});