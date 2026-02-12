import ClientLayout from "@/layouts/client-layout"
import AlertWelcome from "@/components/client/alert-welcome"
import Total from "@/features/client/dashboard/total"
import RecentNotesList from "@/features/client/dashboard/recent-notes-list"

export default function Dashboard() {
    return (
        <ClientLayout>
            <AlertWelcome />

            <Total />

            <RecentNotesList/>
        </ClientLayout>
    )
}
