import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from "@inertiajs/react"
import { update, index } from "@/routes/client/notes"
import { LoaderCircle } from "lucide-react"
import { Note } from "@/types/client/notes"

export default function EditForm({ note }: { note: Note}) {

    const form = useForm(
        {
            title: note.title,
            content: note.content,
        }
    )

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()

        form.submit(update(note.id))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Update notes details</CardTitle>
                    <CardDescription>
                        Update and manage your personal notes
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" type="text" value={form.data.title} onChange={(e) => form.setData('title', e.target.value)} placeholder="Title"/>
                            {form.errors.title && <small className="text-red-500">{form.errors.title}</small>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea value={form.data.content} onChange={(e) => form.setData('content', e.target.value)} placeholder="Type your content here." />
                            {form.errors.content && <small className="text-red-500">{form.errors.content}</small>}
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="gap-2">
                    <Button variant="outline" type="submit" disabled={form.processing}>
                        <a href={index.url()}>
                            Return to list
                        </a>
                    </Button>
                    <Button type="submit" disabled={form.processing}>
                        {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Update Note
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
