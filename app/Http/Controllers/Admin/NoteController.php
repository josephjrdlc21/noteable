<?php

namespace App\Http\Controllers\Admin;

use App\Interfaces\Admin\NoteRepositoryInterface;

use App\Http\Requests\PageRequest;

class NoteController extends Controller{

    public function __construct(NoteRepositoryInterface $note_repository) {
        parent::__construct();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
        $this->note_repository = $note_repository;
    }

    public function index(PageRequest $request) {
        $this->data['filters'] = $request->all();
        $this->data['per_page'] = $this->per_page;

        return $this->note_repository->index($this->data);
    }

    public function destroy(PageRequest $request, $id = null) {

        return $this->note_repository->destroy($id);
    }

    public function show(PageRequest $request, $id = null) {

        return $this->note_repository->show($id);
    }
}