import { Bell, Search, Maximize2 } from "lucide-react"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/admin/sidebar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AppNotification from "@/components/app-notification"
import Profile from "@/components/admin/profile"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return(
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex shrink-0 items-center justify-between border-b px-6 h-[65px] shadow-sm">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="h-6" />
                        <h2 className="text-lg font-medium hidden lg:block">Good Morning, John Smith</h2>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="relative w-64 hidden lg:block">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-9 pr-4"
                            />
                        </div>
                        
                        <Button variant="ghost" size="icon">
                            <Maximize2 className="h-5 w-5" />
                        </Button>
                        
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500" />
                        </Button>
                        
                        <Profile/>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 bg-[#ebe8e9]">
                    <AppNotification />
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>    
    )
}