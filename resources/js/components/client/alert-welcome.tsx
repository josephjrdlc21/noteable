import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CheckCircle2Icon } from "lucide-react"
import { usePage } from "@inertiajs/react"
import { index } from "@/routes/client/notes"

export default function AlertWelcome() {

    const { auth } = usePage().props

    const now = new Date();

    const formattedDate = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    const formattedTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });

    return (
        <Alert>
            <CheckCircle2Icon />
            <AlertTitle className="text-xl">
                Good Day, {auth.client?.name}
            </AlertTitle>
            <AlertDescription>
                <p className="text-sm">
                    {formattedDate} {formattedTime}
                </p>
                <p className="text-md">
                    This is your personal space to write, manage, and revisit your notes anytime. Stay productive and never miss a thought. 
                </p>
                <Button className="my-3" asChild>
                    <a href={index.url()}>
                        Create Note
                    </a>
                </Button>
            </AlertDescription>
        </Alert>
    )
}
