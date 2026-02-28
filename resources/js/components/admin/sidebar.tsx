import * as React from "react"
import { Home, Users, Calendar, NotebookText } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu,
    SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar"
import { dashboard } from "@/routes/admin"
import { index as users } from "@/routes/admin/users"
import { index as clients } from "@/routes/admin/clients"
import { index as notes } from "@/routes/admin/notes"

const data = {
    menu: [
        {
            title: "Dashboard",
            url: dashboard.url(),
            icon: Home,
            isActive: location.pathname === dashboard.url(),
        },
    ],
    pages: [
        {
            title: "Clients",
            url: clients.url(),
            icon: Users,
            isActive: location.pathname === clients.url(),
        },
        {
            title: "Accounts",
            url: users.url(),
            icon: Users,
            isActive: location.pathname === users.url(),
        },
    ],
    apps: [
        {
            title: "Notes",
            url: notes.url(),
            icon: NotebookText,
            isActive: location.pathname === notes.url(),
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props} style={{ backgroundColor: '#faf7f8' }}>
            <SidebarHeader className="border-b px-6 py-4" style={{ backgroundColor: '#faf7f8' }}>
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                        <span className="text-lg font-bold text-white">N</span>
                    </div>
                    <span className="text-xl font-semibold">Noteable</span>
                </div>
            </SidebarHeader>
            <SidebarContent className="px-3 py-2" style={{ backgroundColor: '#faf7f8' }}>
                <SidebarGroup>
                    <SidebarGroupLabel className="px-3 text-xs font-semibold uppercase text-muted-foreground">
                        Menu
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.menu.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={item.isActive} className="px-3">
                                        <a href={item.url} className="py-5">
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className="px-3 text-xs font-semibold uppercase text-muted-foreground">
                        User Management
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.pages.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={item.isActive} className="px-3">
                                        <a href={item.url} className="py-5">
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className="px-3 text-xs font-semibold uppercase text-muted-foreground">
                        Apps
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.apps.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={item.isActive} className="px-3">
                                        <a href={item.url} className="py-5">
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}