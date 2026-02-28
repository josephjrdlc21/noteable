import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatDateTime } from "@/lib/utils"
import { Note } from "@/types/admin/note"
import { index } from "@/routes/admin/notes"
import { Separator } from "@/components/ui/separator"

export default function NoteDetails({ note }: { note: Note }) {

    return (
        <Card className="w-full overflow-hidden shadow-none">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 space-y-1">
                        <h3 className="font-semibold text-lg leading-tight">
                            {note.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                            <b>Created by:</b> {note.user_name} <br/>
                            {formatDateTime(note.created_at)}
                        </p>
                    </div>
                    <div className="flex gap-1">  
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    {note.content}                 
                </p>

                <Separator className="my-4" />

                <Button variant="outline" asChild>
                    <a href={index.url()}>
                        Return to list
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
}
