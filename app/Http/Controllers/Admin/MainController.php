<?php

namespace App\Http\Controllers\Admin;

use App\Interfaces\Admin\MainRepositoryInterface;

use App\Http\Requests\PageRequest;

class MainController extends Controller{

    public function __construct(MainRepositoryInterface $main_repository) {
        parent::__construct();
        $this->main_repository = $main_repository;
    }

    public function dashboard(PageRequest $request) {

        return $this->main_repository->dashboard();
    }
}