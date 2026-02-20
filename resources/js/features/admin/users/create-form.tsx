import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "@inertiajs/react"
import { LoaderCircle } from "lucide-react"
import { index, store } from "@/routes/admin/users"

export default function CreateForm() {

    const form = useForm(
        {
            name: '',
            email: '',
        }
    )

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()

        form.submit(store())
    }

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Create User</CardTitle>
                    <CardDescription>Fill in the form below to create a new user.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" value={form.data.email} onChange={(e) => form.setData('email', e.target.value)} placeholder="Email"/>
                            {form.errors.email && <small className="text-red-500">{form.errors.email}</small>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" type="text" value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} placeholder="Name"/>
                            {form.errors.name && <small className="text-red-500">{form.errors.name}</small>}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="gap-2">
                    <Button variant="outline" asChild>
                        <a href={index.url()}>
                            Cancel
                        </a>
                    </Button>
                    <Button type="submit" disabled={form.processing}>
                        {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
