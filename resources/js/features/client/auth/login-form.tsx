import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NotebookText, LoaderCircle } from "lucide-react"
import { authenticate } from "@/routes/client/auth"
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
                        <span>Login to your account</span>
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
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
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" type="password" value={form.data.password} onChange={(e) => form.setData('password', e.target.value)} />
                            </Field>
                            <Field>
                                <Button type="submit" disabled={form.processing}>
                                    {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Login
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                    <FieldGroup>
                        <Field>
                            <Button variant="outline" type="button">
                                Login with Google
                            </Button>
                        </Field>
                        <FieldDescription className="text-center">
                            Don&apos;t have an account? <a href="#">Sign up</a>
                        </FieldDescription>
                    </FieldGroup>
                </CardContent>
            </Card>
        </div>
    )
}
