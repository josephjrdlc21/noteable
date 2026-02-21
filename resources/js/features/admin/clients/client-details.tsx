import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Client } from "@/types/admin/client"
import { initialsFormat } from "@/lib/utils"
import { index } from "@/routes/admin/clients"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ClientDetails({ client }: { client: Client }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Show Client Details</CardTitle>
                <CardDescription>View the details of the selected client.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-11 h-11">
                            <AvatarImage src={`${client.directory}/${client.filename}`}  alt="profile" />
                            <AvatarFallback>{initialsFormat(client.name)}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-gray-800 text-sm leading-tight">{client.name}</span>
                    </div>
                </div>
                <p className="mt-4 text-xs text-gray-400 truncate">
                    {client.email}
                </p>
                <div className="mt-3 mb-6">
                    <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                                client.status == "active" ? "bg-green-50 text-green-500 border-green-200" : "bg-white text-red-500 border-red-200"
                            }`}
                        >
                        {client.status}
                    </span>
                </div>
                <Separator />
            </CardContent>
            <CardFooter className="gap-2">
                <Button variant="outline" asChild>
                    <a href={index.url()}>Back to Clients</a>
                </Button> 
            </CardFooter>
        </Card>
    )
}
