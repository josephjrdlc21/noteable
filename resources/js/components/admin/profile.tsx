import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuGroup, 
    DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { LogOut, Settings } from "lucide-react"
import { usePage } from "@inertiajs/react"
import { logout } from "@/routes/admin/auth"
import { initialsFormat } from "@/lib/utils"

export default function Profile() {

    const { auth } = usePage().props

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={`${auth.admin?.directory}/${auth.admin?.filename}`}  alt="profile" />
                        <AvatarFallback>{initialsFormat(auth.admin?.name)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">John Smith</span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    <span className="font-bold text-sm">{auth.admin?.name}</span><br/>
                    <small className="text-xs block leading-snug">
                        {auth.admin?.email}
                    </small>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <a href="#"><Settings/> Settings </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <a href={logout.url()}><LogOut/> Logout</a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
