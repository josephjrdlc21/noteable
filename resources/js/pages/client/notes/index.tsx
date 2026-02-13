import ClientLayout from "@/layouts/client-layout"
import CreateForm from "@/features/client/notes/create-form"
import NotesList from "@/features/client/notes/notes-list"
import { NotesIndexProps } from "@/types/client/notes"

export default function Index({ records }: NotesIndexProps) {

    return (
        <ClientLayout>
            <CreateForm />

            <NotesList list={records} />
        </ClientLayout>
    )
}