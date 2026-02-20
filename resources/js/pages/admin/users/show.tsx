import { BreadcrumbRoot, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbTitle, 
    BreadcrumbPage, BreadcrumbSeparator } from "@/components/admin/breadcrumb"
import UserDetails from "@/features/admin/users/user-details"
import AdminLayout from "@/layouts/admin-layout"
import { User } from "@/types/admin/user"

export default function Show({ user }: { user: User}) {
    return (
        <AdminLayout>
            <BreadcrumbRoot>
                <BreadcrumbTitle>Users</BreadcrumbTitle>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Show Details</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </BreadcrumbRoot>

            <div className="w-full max-w-2xl">
                <UserDetails 
                    user={user} 
                />
            </div>
        </AdminLayout>
    )
}