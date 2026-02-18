<?php

namespace App\Http\Controllers\Admin;

use App\Interfaces\Admin\UserRepositoryInterface;

use App\Http\Requests\PageRequest;
use App\Http\Requests\Admin\UserRequest;

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

    public function create(PageRequest $request) {

        return $this->user_repository->create();
    }

    public function store(UserRequest $request) {

        $data = $request->validated();

        return $this->user_repository->store($data);
    }

    public function edit(PageRequest $request, $id = null) {

        return $this->user_repository->edit($id);
    }

    public function update(UserRequest $request, $id = null) {

        $data = $request->validated();

        return $this->user_repository->update($id, $data);
    }

    public function update_status(PageRequest $request, $id = null) {

        return $this->user_repository->update_status($id);
    }

    public function update_password(PageRequest $request, $id = null) {

        return $this->user_repository->update_password($id);
    }

    public function destroy(PageRequest $request, $id = null) {

        return $this->user_repository->destroy($id);
    }

    public function show(PageRequest $request, $id = null) {

        return $this->user_repository->show($id);
    }
}