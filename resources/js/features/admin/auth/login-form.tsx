import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NotebookText, LoaderCircle } from "lucide-react"
import { authenticate } from "@/routes/admin/auth"
import { useForm } from "@inertiajs/react"

export function LoginForm({className, ...props}: React.ComponentProps<"div">) {

    const form = useForm(
		{
			email: '',
			password: '',
    	}
	)

	const handelSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        form.submit(authenticate())
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="flex flex-col items-center justify-center gap-2">
                        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-sm">
                            <NotebookText className="size-4" />
                        </div>
                        <span>Admin Portal</span>
                    </CardTitle>
                    <CardDescription>
                        Enter your credetials below to login
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handelSubmit} className="mb-4">
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" type="text" placeholder="m@example.com" value={form.data.email} onChange={(e) => form.setData('email', e.target.value)}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input id="password" type="password" value={form.data.password} onChange={(e) => form.setData('password', e.target.value)} placeholder="**********" />
                            </Field>
                            <Field>
                                <Button type="submit" disabled={form.processing}>
                                    {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Login
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
