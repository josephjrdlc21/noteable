<?php

namespace App\Repositories\Client;

use App\Interfaces\Client\NoteRepositoryInterface;

use App\Models\Note;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class NoteRepository implements NoteRepositoryInterface{

    public function index(array $data) {
        $data['records'] = Note::latest()->paginate($data['per_page'])->withQueryString();

        return inertia('client/notes/index', $data);
    }

    public function store(array $data) {
        DB::beginTransaction();
        try {
            $user = Auth::guard('web')->user();

            $note = new Note;
            $note->user_id = $user->id;
            $note->user_name = $user->name;
            $note->title = $data['title'];
            $note->content = $data['content'];
            $note->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "New note has been created successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('client.notes.index');
    }

    public function edit(int $id) {
        $data['note'] = Note::find($id);

        if (!$data['note']) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        return inertia('client/notes/edit', $data);
    }

    public function update(int $id, array $data) {
        $note = Note::find($id);

        if (!$note) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $note->title = $data['title'];
            $note->content = $data['content'];
            $note->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Note details has been updated successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('client.notes.index');
    }

    public function show(int $id) {
        $data['note'] = Note::find($id);

        if (!$data['note']) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        return inertia('client/notes/show', $data);
    }

    public function destroy(int $id) {
        $note = Note::find($id);

        if (!$note) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $note->delete();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Note deleted successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('client.notes.index');
    }
}