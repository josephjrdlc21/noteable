import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { User } from "@/types/admin/user"
import { initialsFormat } from "@/lib/utils"
import { index } from "@/routes/admin/users"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function UserDetails({ user }: { user: User }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Show User Details</CardTitle>
                <CardDescription>View the details of the selected user.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-11 h-11">
                            <AvatarImage src={`${user.directory}/${user.filename}`}  alt="profile" />
                            <AvatarFallback>{initialsFormat(user.name)}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-gray-800 text-sm leading-tight">{user.name}</span>
                    </div>
                </div>
                <p className="mt-4 text-xs text-gray-400 truncate">{user.email}</p>
                <div className="mt-3 mb-6">
                    <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                                user.status == "active" ? "bg-green-50 text-green-500 border-green-200" : "bg-white text-red-500 border-red-200"
                            }`}
                        >
                        {user.status}
                    </span>
                </div>
                <Separator />
            </CardContent>
            <CardFooter className="gap-2">
                <Button variant="outline" asChild>
                    <a href={index.url()}>Back to Users</a>
                </Button> 
            </CardFooter>
        </Card>
    )
}
