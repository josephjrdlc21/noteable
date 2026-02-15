import * as React from "react"
import { Home, Users, Calendar, NotebookText } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu,
    SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar"

const data = {
    menu: [
        {
            title: "Dashboard",
            url: "#",
            icon: Home,
        },
    ],
    pages: [
        {
            title: "Clients",
            url: "#",
            icon: Users,
        },
        {
            title: "Accounts",
            url: "#",
            icon: Users,
        },
    ],
    apps: [
        {
            title: "Notes",
            url: "#",
            icon: NotebookText,
            isActive: true,
        },
        {
            title: "Activities",
            url: "#",
            icon: Calendar,
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
                                    <SidebarMenuButton asChild className="px-3">
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
                                    <SidebarMenuButton asChild className="px-3">
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