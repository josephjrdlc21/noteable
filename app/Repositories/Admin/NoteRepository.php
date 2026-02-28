<?php

namespace App\Repositories\Admin;

use App\Interfaces\Admin\NoteRepositoryInterface;

use App\Models\Note;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class NoteRepository implements NoteRepositoryInterface{

    public function index(array $data) {

        $keyword = data_get($data, 'filters.keyword');
        $start_date = data_get($data, 'filters.start_date');
        $end_date = data_get($data, 'filters.end_date');

        $data['records'] = Note::where(function ($query) use ($keyword) {
            if (strlen($keyword) > 0) {
                $query->whereRaw("LOWER(title) LIKE '%{$keyword}%'")
                    ->orWhereRaw("LOWER(user_name) LIKE '%{$keyword}%'");
            }
        })
        ->where(function ($query) use ($start_date, $end_date) {
            $query->where(function ($q) use ($start_date) {
                if(strlen($start_date) > 0) {
                    $q->whereDate('created_at', '>=', Carbon::parse($start_date)->format("Y-m-d"));
                }
            })->where(function ($q) use ($end_date) {
                if(strlen($end_date) > 0) {
                    $q->whereDate('created_at', '<=', Carbon::parse($end_date)->format("Y-m-d"));
                }
            });
        })
        ->latest()
        ->paginate($data['per_page'])
        ->withQueryString();
       
        return inertia('admin/notes/index', $data);
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
            session()->flash('notification-msg', "Note has been deleted successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('admin.notes.index');
    }

    public function show(int $id) {
        $data['note'] = Note::find($id);

        if (!$data['note']) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        return inertia('admin/notes/show', $data);
    }
}