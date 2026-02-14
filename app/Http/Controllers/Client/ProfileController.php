<?php

namespace App\Http\Controllers\Client;

use App\Interfaces\Client\ProfileRepositoryInterface;

use App\Http\Requests\PageRequest;
use App\Http\Requests\Client\ProfileRequest;

class ProfileController extends Controller{

    public function __construct(ProfileRepositoryInterface $profile_repository) {
        parent::__construct();
        $this->profile_repository = $profile_repository;
    }

    public function index(PageRequest $request) {
        $this->data['profile'] = $request->all();

        return $this->profile_repository->index($this->data);
    }

    public function update(ProfileRequest $request, $id = null) {

        $data = $request->validated();

        return $this->profile_repository->update($id, $data);
    }
}