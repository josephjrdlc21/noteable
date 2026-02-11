import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { PocketKnife } from "lucide-react"

export function LoginForm({className, ...props}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="flex flex-col items-center justify-center gap-2">
                        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-sm">
                            <PocketKnife className="size-4" />
                        </div>
                        <span>Login to your account</span>
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="mb-4">
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" type="email" placeholder="m@example.com"/>
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" type="password" required />
                            </Field>
                            <Field>
                                <Button type="submit">Login</Button>
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
