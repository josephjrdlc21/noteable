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

test('get users create page', function () {

    $admin = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.users.create'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/users/create');
        });
});

test('store new user', function () {

    $admin = Admin::factory()->create();

    $new_user = [
        'name' => "Test User",
        'email' => "test@example.com",
    ];

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->post(route('admin.users.store'), $new_user)
        ->assertRedirect(route('admin.users.index'));

    $user = Admin::where('email', $new_user['email'])->first();

    expect($user)->not()->toBeNull();
    expect($user)
        ->name->toBe($new_user['name'])
        ->email->toBe($new_user['email']);
});

test('get users edit page', function () {

    $admin = Admin::factory()->create();
    $user = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.users.edit', $user->id))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/users/edit');
        });
});

test('update user details', function () {

    $admin = Admin::factory()->create();
     
    $update_admin = [
        'name' => "Test User Updated",
        'email' => "testupdated@example.com",
    ];

    $user = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->post(route('admin.users.update', $user->id), $update_admin)
        ->assertRedirect(route('admin.users.index'));

    $user->refresh();

    expect($user)
        ->name->toBe($update_admin['name'])
        ->email->toBe($update_admin['email']);
});  

test('update user status', function () {

    $admin = Admin::factory()->create();
    $user = Admin::factory()->create(['status' => "active"]);

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.users.update_status', $user->id))
        ->assertRedirect(route('admin.users.index'));

    $user->refresh();

    expect($user->status)->toBe("inactive");
});

test('update user password', function () {

    $admin = Admin::factory()->create();
    $user = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.users.update_password', $user->id))
        ->assertRedirect(route('admin.users.index'));

    $user->refresh();

    expect(\Hash::check("password", $user->password))->toBeTrue();
});

test ('delete user', function () {

    $admin = Admin::factory()->create();
    $user = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.users.delete', $user->id))
        ->assertRedirect(route('admin.users.index'));

    expect(Admin::find($user->id))->toBeNull();
});

test('get users show page', function () {

    $admin = Admin::factory()->create();
    $user = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.users.show', $user->id))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/users/show');
        });
});