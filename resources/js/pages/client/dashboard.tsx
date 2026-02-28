import ClientLayout from "@/layouts/client-layout"
import AlertWelcome from "@/components/client/alert-welcome"
import RecentNotesList from "@/features/client/dashboard/recent-notes-list"
import { RecentNotes } from "@/types/client/dashboard"

export default function Dashboard({ recent_notes }: { recent_notes: RecentNotes[] }) {

    return (
        <ClientLayout>
            <AlertWelcome />

            <RecentNotesList 
                recent_notes={recent_notes}
            />
        </ClientLayout>
    )
}
