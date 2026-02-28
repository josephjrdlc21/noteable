<?php

namespace App\Repositories\Client;

use App\Interfaces\Client\MainRepositoryInterface;

use App\Models\User;
use App\Models\Note;

use Illuminate\Support\Facades\Auth;

class MainRepository implements MainRepositoryInterface{

    public function dashboard() {
        $user = Auth::guard('web')->user();

        $data['recent_notes'] = Note::where('user_id', $user->id)->latest()->take(5)->get();

        return inertia('client/dashboard', $data);
    }
    
}