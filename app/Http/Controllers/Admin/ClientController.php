<?php

namespace App\Http\Controllers\Admin;

use App\Interfaces\Admin\ClientRepositoryInterface;

use App\Http\Requests\PageRequest;

class ClientController extends Controller{

    public function __construct(ClientRepositoryInterface $client_repository) {
        parent::__construct();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
        $this->client_repository = $client_repository;
    }

    public function index(PageRequest $request) {
        $this->data['filters'] = $request->all();
        $this->data['per_page'] = $this->per_page;

        return $this->client_repository->index($this->data);
    }

    public function update_status(PageRequest $request, $id = null) {

        return $this->client_repository->update_status($id);
    }

    public function destroy(PageRequest $request, $id = null) {

        return $this->client_repository->destroy($id);
    }

    public function show(PageRequest $request, $id = null) {

        return $this->client_repository->show($id);
    }
}