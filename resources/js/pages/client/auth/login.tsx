import { LoginForm } from "@/features/client/auth/login-form"
import AppNotification from "@/components/app-notification"

export default function Page() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-md">
                <AppNotification />
                <LoginForm />
            </div>
        </div>
    )
}