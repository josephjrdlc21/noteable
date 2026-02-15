<?php

namespace App\Http\Controllers\Admin;

use App\Interfaces\Admin\AuthenticateRepositoryInterface;

use App\Http\Requests\PageRequest;
use App\Http\Requests\Admin\AuthenticateRequest;

class AuthenticateController extends Controller{

    public function __construct(AuthenticateRepositoryInterface $authenticate_repository) {
        parent::__construct();
        $this->authenticate_repository = $authenticate_repository;
    }

    public function login(PageRequest $request) {

        return $this->authenticate_repository->login();
    }

    public function authenticate(AuthenticateRequest $request) {

        return $this->authenticate_repository->authenticate($request->validated());
    }

    public function logout(PageRequest $request) {

        return $this->authenticate_repository->logout();
    }
}