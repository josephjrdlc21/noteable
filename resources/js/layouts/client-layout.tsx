import Topbar from "@/components/client/topbar"
import AppNotification from "@/components/app-notification"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return(
        <>
            <AppNotification />
            <Topbar/>
            <div className="p-4 mx-auto max-w-7xl">
                {children}
            </div>
        </>
    )
}