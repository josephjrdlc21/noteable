<?php

namespace App\Repositories\Admin;

use App\Interfaces\Admin\UserRepositoryInterface;

use App\Models\Admin;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserRepository implements UserRepositoryInterface{

    public function index(array $data) {

        $keyword = data_get($data, 'filters.keyword');
        $start_date = data_get($data, 'filters.start_date');
        $end_date = data_get($data, 'filters.end_date');
       
        $data['records'] = Admin::where(function ($query) use ($keyword) {
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
        ->where('id', '!=', "1")
        ->latest()
        ->paginate($data['per_page'])
        ->withQueryString();
       
        return inertia('admin/users/index', $data);
    }
    
    public function create() {

        return inertia('admin/users/create');
    }

    public function store(array $data) {
        DB::beginTransaction();
        try {
            $password = Str::random(8);

            $admin = new Admin;
            $admin->name = $data['name'];
            $admin->email = $data['email'];
            $admin->status = "active";
            $admin->password = bcrypt($password);
            $admin->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "New admin has been created successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('admin.users.index');
    }

    public function edit(int $id) {
        $data['user'] = Admin::find($id);

        if (!$data['user']) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        return inertia('admin/users/edit', $data);
    }

    public function update(int $id, array $data) {
        $admin = Admin::find($id);

        if (!$admin) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $admin->name = $data['name'];
            $admin->email = $data['email'];
            $admin->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Admin details has been updated successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('admin.users.index');
    }

    public function update_status(int $id) {
        $admin = Admin::find($id);

        if (!$admin) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $admin->status = $admin->status === 'active' ? 'inactive' : 'active';
            $admin->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Admin status has been updated successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('admin.users.index');
    }

    public function update_password(int $id) {
        $admin = Admin::find($id);

        if (!$admin) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $password = Str::random(8);

            $admin->password = bcrypt($password);
            $admin->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Admin password has been updated successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('admin.users.index');
    }

    public function destroy(int $id) {
        $admin = Admin::find($id);

        if (!$admin) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $admin->delete();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Admin has been deleted successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('admin.users.index');
    }

    public function show(int $id) {
        $data['user'] = Admin::find($id);

        if (!$data['user']) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        return inertia('admin/users/show', $data);
    }
}