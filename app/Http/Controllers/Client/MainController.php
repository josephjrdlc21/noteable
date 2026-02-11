<?php

namespace App\Http\Controllers\Client;

use App\Interfaces\Client\MainRepositoryInterface;

use App\Http\Requests\PageRequest;

class MainController extends Controller{

    public function __construct(MainRepositoryInterface $main_repository) {
        parent::__construct();
        $this->main_repository = $main_repository;
    }

    public function dashboard() {

        return $this->main_repository->dashboard();
    }
}