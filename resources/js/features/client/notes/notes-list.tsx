import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Edit, Trash2, EyeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NotesListProps } from "@/types/client/notes"
import { formatDateTime } from "@/lib/utils"
import AppPagination from "@/components/app-pagination"
import { Separator } from "@/components/ui/separator"

export default function NotesList({ list }: NotesListProps) {
    const notes = Array.isArray(list.data) ? list.data : list.data ? [list.data] : []

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4 mb-10">
                {notes.map((note) => (
                    <Card key={note.id} className="h-[200px] w-full overflow-hidden">
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 space-y-1">
                                    <h3 className="font-semibold text-lg leading-tight line-clamp-1">
                                        {note.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">{formatDateTime(note.created_at)}</p>
                                </div>
                                <div className="flex gap-1">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                    >
                                        <EyeIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                                {note.content}                        
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Separator className="my-5" />

            <AppPagination links={list.links} />
        </>
    )
}
