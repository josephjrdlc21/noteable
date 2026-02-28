export interface Total {
    total_notes: number,
    notes_change: number,
    total_activities: number,
    activities_change: number,
}


export interface RecentNotes {
    id: number;
    user_id: number;
    user_name: string;
    title: string;
    content: string;

    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}