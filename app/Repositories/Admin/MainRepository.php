<?php

namespace App\Repositories\Admin;

use App\Interfaces\Admin\MainRepositoryInterface;

use App\Models\Admin;
use App\Models\Note;

class MainRepository implements MainRepositoryInterface{

    public function dashboard() {

        $data['notes_charts'] = Note::selectRaw('MONTHNAME(created_at) as month, COUNT(*) as notes')
            ->whereBetween('created_at', [
                now()->subMonths(5)->startOfMonth(),
                now()->endOfMonth(),
            ])
            ->groupByRaw('YEAR(created_at), MONTH(created_at), MONTHNAME(created_at)')
            ->orderByRaw('YEAR(created_at), MONTH(created_at)')
            ->get();
       
        return inertia('admin/dashboard', $data);
    }
    
}