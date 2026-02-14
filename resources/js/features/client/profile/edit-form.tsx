import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePage } from "@inertiajs/react"
import { initialsFormat, toHtmlDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useForm } from "@inertiajs/react"
import { update } from "@/routes/client/profile"
import { LoaderCircle } from "lucide-react"

export default function EditForm() {

    const { auth } = usePage().props

    const form = useForm(
        {
            image: null as any,
            name: auth.client?.name,
            email: auth.client?.email,
            date_joined: toHtmlDate(auth.client?.created_at),
        }
    )
    
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()

        form.submit(update(auth.client?.id))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        Profile Details
                    </CardTitle>
                    <CardDescription>
                        <p className="mb-2">Update and manage your profile</p>
                        <Avatar className="size-15">
                            <AvatarImage src={`${auth.client?.directory}/${auth.client?.filename}`}  alt="profile" />
                            <AvatarFallback>{initialsFormat(auth.client?.name)}</AvatarFallback>
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
                            <Label htmlFor="Datejoined">Date Joined</Label>
                            <Input id="Datejoined" type="date" name="date_joined" value={form.data.date_joined} onChange={(e) => form.setData('date_joined', e.target.value)} placeholder="Date Joined" disabled/>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="gap-2">
                    <Button type="submit" disabled={form.processing}>
                        {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Save Change
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
