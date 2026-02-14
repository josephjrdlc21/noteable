import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuGroup, 
    DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Lock, LogOut, User2Icon, Settings } from "lucide-react"
import { usePage } from "@inertiajs/react"
import { logout } from "@/routes/client/auth"
import { initialsFormat } from "@/lib/utils"

export default function Profile() {
    
    const { auth } = usePage().props

    return(   
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage src={`${auth.client?.directory}/${auth.client?.filename}`}  alt="profile" />
                    <AvatarFallback className="bg-violet-100 dark:text-gray-700">{initialsFormat(auth.client?.name)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    <span className="font-bold text-sm">{auth.client?.name}</span><br/>
                    <small className="text-gray-600 text-xs block leading-snug">
                        {auth.client?.email}
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