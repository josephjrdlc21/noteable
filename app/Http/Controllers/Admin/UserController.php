<?php

namespace App\Http\Controllers\Admin;

use App\Interfaces\Admin\UserRepositoryInterface;

use App\Http\Requests\PageRequest;

class UserController extends Controller{

    public function __construct(UserRepositoryInterface $user_repository) {
        parent::__construct();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
        $this->user_repository = $user_repository;
    }

    public function index(PageRequest $request) {
        $this->data['filters'] = $request->all();
        $this->data['per_page'] = $this->per_page;

        return $this->user_repository->index($this->data);
    }
}