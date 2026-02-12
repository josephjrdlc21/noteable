import Topbar from "@/components/client/topbar"
import AppNotification from "@/components/app-notification"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return(
        <>
            <AppNotification />
            <Topbar/>
            <div className="px-4 py-10 mx-auto max-w-7xl">
                {children}
            </div>
        </>
    )
}