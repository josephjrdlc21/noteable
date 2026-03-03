<?php

namespace App\Repositories\Admin;

use App\Interfaces\Admin\ProfileRepositoryInterface;

use App\Models\Admin;

use Illuminate\Support\Facades\DB;
use App\Services\ImageUploader;

class ProfileRepository implements ProfileRepositoryInterface{

    public function index(array $data) {

        return inertia('admin/profile/index', $data);
    }

    public function update(int $id, array $data) {
        $profile = Admin::find($id);

        if (!$profile) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $profile->name = $data['name'];
            $profile->save();

            if(!empty($data['image'])) {
                $image = ImageUploader::upload($data['image'], "uploads/profile/{$profile->id}");

                $profile->path = $image['path'];
                $profile->directory = $image['directory'];
                $profile->filename = $image['filename'];
                $profile->source = $image['source'];
                $profile->save();
            }

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Profile details has been updated successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}.");
            return redirect()->back();
        }

        return redirect()->route('admin.profile.index');
    }
}