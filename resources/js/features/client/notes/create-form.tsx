import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InputGroup, InputGroupAddon, InputGroupButton } from "@/components/ui/input-group"
import TextareaAutosize from "react-textarea-autosize"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "@inertiajs/react"
import { store } from "@/routes/client/notes"
import { LoaderCircle } from "lucide-react"
import useGenerate from "@/hooks/use-generate"

export default function CreateForm() {

    const { generate, loading } = useGenerate((text: string) =>
        form.setData("content", text)
    ); 

    const form = useForm(
        {
            title: '',
            content: '',
        }
    )

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()

        form.submit(store(), {
            onSuccess: () => {
                form.reset()
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-full shadow-none">
                <CardHeader>
                    <CardTitle>Add a new note</CardTitle>
                    <CardDescription>
                        Create and manage your personal notes
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
                            <InputGroup>
                                <TextareaAutosize
                                    data-slot="input-group-control"
                                    className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                                    value={form.data.content}
                                    onChange={(e) => form.setData('content', e.target.value)}
                                    placeholder="Type you content here..."
                                />
                                <InputGroupAddon align="block-end">
                                    <InputGroupButton 
                                        className="ml-auto" 
                                        size="sm" 
                                        variant="outline" 
                                        onClick={() => generate(form.data.title)}
                                        disabled={loading || !form.data.title.trim()}
                                    >
                                        {loading && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Generate Content
                                    </InputGroupButton>
                                </InputGroupAddon>
                            </InputGroup>
                            <p className="text-sm text-gray-500">
                                The content can be automatically generated based on the title you enter. 
                                Click <strong>Generate Content</strong> to have the AI create a professional note for you.
                            </p>
                            {form.errors.content && <small className="text-red-500">{form.errors.content}</small>}
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="gap-2">
                    <Button type="submit" disabled={form.processing}>
                        {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create Note
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
