<?php

namespace App\Repositories\Admin;

use App\Interfaces\Admin\ClientRepositoryInterface;

use App\Models\User;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ClientRepository implements ClientRepositoryInterface{

    public function index(array $data) {

        $keyword = data_get($data, 'filters.keyword');
        $start_date = data_get($data, 'filters.start_date');
        $end_date = data_get($data, 'filters.end_date');
       
        $data['records'] = User::where(function ($query) use ($keyword) {
            if (strlen($keyword) > 0) {
                $query->whereRaw("LOWER(name) LIKE '%{$keyword}%'")
                    ->orWhereRaw("LOWER(email) LIKE '%{$keyword}%'");
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
       
        return inertia('admin/clients/index', $data);
    }

    public function update_status(int $id) {
        $client = User::find($id);

        if (!$client) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $client->status = $client->status === 'active' ? 'inactive' : 'active';
            $client->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Client status has been updated successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('admin.clients.index');
    }

    public function destroy(int $id) {
        $client = User::find($id);

        if (!$client) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $client->delete();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Client has been deleted successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('admin.clients.index');
    }

    public function show(int $id) {
        $data['client'] = User::find($id);

        if (!$data['client']) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        return inertia('admin/clients/show', $data);
    }
}