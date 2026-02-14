import ClientLayout from "@/layouts/client-layout"
import SingleNote from "@/features/client/notes/single-note";
import { Note } from "@/types/client/notes"

export default function Show({ note }: { note: Note }) {
    
    return (
        <ClientLayout>
            <SingleNote note={note} />
        </ClientLayout>
    )
}