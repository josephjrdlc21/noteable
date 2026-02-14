import useFlash from "@/hooks/use-flash"
import { Toaster } from "@/components/ui/sonner"

export default function AppNotification() {

    useFlash()

    return (
        <Toaster position="bottom-left"/>
    )
}
