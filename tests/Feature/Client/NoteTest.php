<?php

use Inertia\Testing\AssertableInertia as Assert;

use App\Models\User;
use App\Models\Note;

test('get notes page', function () {

    $user = User::factory()->create();

    $this->withMiddleware()
        ->actingAs($user, 'web')
        ->get(route('client.notes.index'))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('client/notes/index');
        });
});

test('store new note', function () {

    $user = User::factory()->create();

    $new_note = [
        'title' => "Test",
        'content' => "This is a test.",
    ];

    $this->withMiddleware()
        ->actingAs($user, 'web')
        ->post(route('client.notes.store'), $new_note)
        ->assertRedirect(route('client.notes.index'));

    $note = Note::where('title', $new_note['title'])->first();

    expect($note)->not()->toBeNull();
    expect($note)
        ->title->toBe($new_note['title'])
        ->content->toBe($new_note['content']);
});

test('get edit note page', function () {

    $user = User::factory()->create();

    $user_note = [
        'user_id' => $user->id,
    ];

    $note = Note::factory()->create($user_note);

    $this->withMiddleware()
        ->actingAs($user, 'web')
        ->get(route('client.notes.edit', $note->id))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('client/notes/edit');
        });
    
    expect(Note::find($note->id))->not()->toBeNull();
});

test('update note details', function () {

    $user = User::factory()->create();

    $user_note = [
        'user_id' => $user->id,
    ];

    $note = Note::factory()->create($user_note);

    $update_note = [
        'title' => "Test update",
        'content' => "This is a test update.",
    ];

    $this->withMiddleware()
        ->actingAs($user, 'web')
        ->post(route('client.notes.update', $note->id), $update_note)
        ->assertRedirect(route('client.notes.index'));
    
    $note->refresh();

    expect($note)
        ->title->toBe($update_note['title'])
        ->content->toBe($update_note['content']);
});

test('show single note details', function () {

    $user = User::factory()->create();

    $user_note = [
        'user_id' => $user->id,
    ];

    $note = Note::factory()->create($user_note);

    $this->withMiddleware()
        ->actingAs($user, 'web')
        ->get(route('client.notes.show', $note->id))
        ->assertOk()
        ->assertInertia(function (Assert $page) {
            $page->component('client/notes/show');
        });
    
    expect(Note::find($note->id))->not()->toBeNull();
});

test('delete note', function () {

    $user = User::factory()->create();

    $user_note = [
        'user_id' => $user->id,
    ];

    $note = Note::factory()->create($user_note);

    $this->withMiddleware()
        ->actingAs($user, 'web')
        ->delete(route('client.notes.delete', $note->id))
        ->assertRedirect(route('client.notes.index'));

    expect(Note::find($note->id))->toBeNull();
});
