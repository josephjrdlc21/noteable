import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "@inertiajs/react"
import { LoaderCircle } from "lucide-react"
import { update } from "@/routes/admin/profile"
import { dashboard } from "@/routes/admin"
import { usePage } from "@inertiajs/react"
import { toHtmlDate, initialsFormat } from "@/lib/utils"

export default function EditForm() {

    const { auth } = usePage().props

    const form = useForm(
        {
            image: null as any,
            name: auth.admin?.name,
            email: auth.admin?.email,
            date_joined: toHtmlDate(auth.admin?.created_at),
        }
    )

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()

        form.submit(update(auth.admin?.id))
    }
    
    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Profile Details
                    </CardTitle>
                    <CardDescription>
                        <p className="mb-2">Update and manage your profile</p>
                        <Avatar className="size-15">
                            <AvatarImage src={`${auth.admin?.directory}/${auth.admin?.filename}`}  alt="profile" />
                            <AvatarFallback>{initialsFormat(auth.admin?.name)}</AvatarFallback>
                        </Avatar>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="image">Change Avatar</Label>
                            <Input type="file" id="image" name="image" onChange={(e) => form.setData('image', e.target.files?.[0] ?? null)} />
                            {form.errors.image && <small className="text-red-500">{form.errors.image}</small>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="Name">Name</Label>
                            <Input id="Name" type="text" name="name" value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} placeholder="Name"/>
                            {form.errors.name && <small className="text-red-500">{form.errors.name}</small>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="Email">Email</Label>
                            <Input id="Email" type="text" name="email" value={form.data.email} onChange={(e) => form.setData('email', e.target.value)} placeholder="Email" disabled/>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="Datejoined">Date Created</Label>
                            <Input id="Datejoined" type="date" name="date_joined" value={form.data.date_joined} onChange={(e) => form.setData('date_joined', e.target.value)} placeholder="Date Joined" disabled/>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="gap-2">
                    <Button variant="outline" asChild>
                        <a href={dashboard.url()}>
                            Return to dashboard
                        </a>
                    </Button>
                    <Button type="submit" disabled={form.processing}>
                        {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Save
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}