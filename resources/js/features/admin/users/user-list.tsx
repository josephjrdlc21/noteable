import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Pagination } from "@/types/admin/user"
import AppPagination from "@/components/app-pagination"
import Action from "@/features/admin/users/action"
import { dateTime, statusBadgeClass } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { create } from "@/routes/admin/users"

export default function UserList({ records }: { records: Pagination }) {
    const users = Array.isArray(records.data) ? records.data : records.data ? [records.data] : []

    return (
        <Card className="shadow-none gap-4">
            <CardHeader className="flex flex-col md:flex-row md:items-center justify-between">
                <CardTitle>User List</CardTitle>
                <div>
                    <Button size="sm" asChild>
                        <a href={create.url()}>
                            <Plus />Create User
                        </a>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent border-t border-r border-l">
                            <TableHead className="min-w-[200px] border-l border-r"><b>Name</b></TableHead>
                            <TableHead className="min-w-[200px] border-l border-r"><b>Email</b></TableHead>
                            <TableHead className="min-w-[200px] border-l border-r"><b>Last Login</b></TableHead>
                            <TableHead className="min-w-[200px] border-l border-r text-center"><b>Status</b></TableHead>
                            <TableHead className="min-w-[200px] border-l border-r"><b>Date Created</b></TableHead>
                            <TableHead className="min-w-[150px] border-l border-r text-center"><b>Action</b></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {users.length === 0 ? (
                        <TableRow className="hover:bg-transparent">
                            <TableCell colSpan={6} className="text-center py-5 border-b border-l border-r">No Record Found.</TableCell>
                        </TableRow>
                    ) : (
                        users.map((user) => (
                            <TableRow key={user.id} className="hover:bg-transparent">
                                <TableCell className="min-w-[200px] border-b border-l border-r">{user.name}</TableCell>
                                <TableCell className="min-w-[200px] border-b border-l border-r">{user.email}</TableCell>
                                <TableCell className="min-w-[200px] border-b border-l border-r">{user.last_login_at ? dateTime(user.last_login_at) : "N/A"}</TableCell>
                                <TableCell className="min-w-[100px] border-b border-l border-r text-center">
                                    <Badge variant={statusBadgeClass(user.status) as any} className="py-1 px-2">{user.status}</Badge>
                                </TableCell>
                                <TableCell className="min-w-[200px] border-b border-l">{dateTime(user.created_at)}</TableCell>
                                <TableCell className="min-w-[150px] border-b border-l border-r text-center">
                                    <Action id={user.id} />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <AppPagination links={records.links} />
            </CardFooter>
        </Card>
    )
}
