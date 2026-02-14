import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuGroup, 
    DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { LogOut, Settings } from "lucide-react"
import { usePage } from "@inertiajs/react"
import { logout } from "@/routes/client/auth"
import { index } from "@/routes/client/profile"
import { initialsFormat } from "@/lib/utils"

export default function Profile() {
    
    const { auth } = usePage().props

    return(   
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage src={`${auth.client?.directory}/${auth.client?.filename}`}  alt="profile" />
                    <AvatarFallback>{initialsFormat(auth.client?.name)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    <span className="font-bold text-sm">{auth.client?.name}</span><br/>
                    <small className="text-xs block leading-snug">
                        {auth.client?.email}
                    </small>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <a href={index.url()}><Settings/> Settings </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <a href={logout.url()}><LogOut/> Logout</a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}