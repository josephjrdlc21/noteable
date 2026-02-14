<?php

namespace App\Http\Controllers\Client;

use App\Interfaces\Client\NoteRepositoryInterface;

use App\Http\Requests\PageRequest;
use App\Http\Requests\Client\NoteRequest;

class NoteController extends Controller{

    public function __construct(NoteRepositoryInterface $note_repository) {
        parent::__construct();
        $this->per_page = env("DEFAULT_PER_PAGE", 9);
        $this->note_repository = $note_repository;
    }

    public function index(PageRequest $request) {
        $this->data['filters'] = $request->all();
        $this->data['per_page'] = $this->per_page;

        return $this->note_repository->index($this->data);
    }

    public function store(NoteRequest $request) {

        $data = $request->validated();

        return $this->note_repository->store($data);
    }

    public function edit(PageRequest $request, $id = null) {

        return $this->note_repository->edit($id);
    }

    public function update(NoteRequest $request, $id = null) {

        $data = $request->validated();

        return $this->note_repository->update($id, $data);
    }

    public function show(PageRequest $request, $id = null) {

        return $this->note_repository->show($id);
    }

    public function destroy(PageRequest $request, $id = null) {

        return $this->note_repository->destroy($id);
    }
}