export interface Note {
    id: number;
    user_id: number;
    user_name: string;
    title: string;
    content: string;

    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface Filter {
    keyword: string | null;
}

export interface Link {
    url: string | null;
    label: string | null;
    page: number | null;
    active: boolean;
}

export interface Pagination {
    current_page: number;
    data: Note;
    first_page_url: string | null;
    from: number | null;
    last_page: number | null;
    last_page_url: string | null;
    links: Link[];
    next_page_url: string | null;
    path: string | null;
    per_page: number | null;
    prev_page_url: string | null;
    to: number | string;
    total: number | string;
}

/**
 * All props types in here.
 */
export interface NotesIndexProps {
    records: Pagination;
    filters?: Filter;
}

export interface NotesListProps {
    list: Pagination;
    filters?: Filter;
}