<?php

use Inertia\Testing\AssertableInertia as Assert;

use App\Models\Note;
use App\Models\Admin;

test('get notes list page', function () {

    $admin = Admin::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.notes.index'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/notes/index');
        });
});

test ('delete note', function () {

    $admin = Admin::factory()->create();
    $note = Note::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.notes.delete', $note->id))
        ->assertRedirect(route('admin.notes.index'));

    expect(Note::find($note->id))->toBeNull();
});

test('get notes show page', function () {

    $admin = Admin::factory()->create();
    $note = Note::factory()->create();

    $this->withMiddleware()
        ->actingAs($admin, 'admin')
        ->get(route('admin.notes.show', $note->id))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('admin/notes/show');
        });
});