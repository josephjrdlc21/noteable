import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, 
    DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { MoreHorizontal } from "lucide-react"
import { update_status, deleteMethod, show } from "@/routes/admin/clients"
import { router } from "@inertiajs/react"

export default function Action({ id }: { id: number}) {

    const handleUpdateStatus = (id: number) => {
        router.get(update_status.url(id))
    }

    const handleDeleteUser = (id: number) => {
        router.delete(deleteMethod.url(id))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
                <Button variant="ghost" size="sm">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  className="w-40">
                <DropdownMenuItem asChild>
                    <a href={show.url({ id })} className="w-full justify-start px-2">Show Details</a>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost"  className="w-full justify-start px-2">Change Status</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent size="sm">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Confirm Status Update</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Do you want to change the status of this client?
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleUpdateStatus(id)}>Change Status</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost"  className="w-full justify-start px-2 text-red-500">Delete Client</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent size="sm">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Confirm Client Deletion</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Do you want to delete this client?
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDeleteUser(id)}>Delete Client</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
