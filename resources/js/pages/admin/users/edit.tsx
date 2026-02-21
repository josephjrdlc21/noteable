import { BreadcrumbRoot, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbTitle, 
    BreadcrumbPage, BreadcrumbSeparator } from "@/components/admin/breadcrumb"
import EditForm from "@/features/admin/users/edit-form"
import AdminLayout from "@/layouts/admin-layout"
import { User } from "@/types/admin/user"

export default function Edit({ user }: { user: User}) {
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
                        <BreadcrumbPage>Edit User</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </BreadcrumbRoot>

            <div className="w-full max-w-xl">
                <EditForm 
                    user={user} 
                />
            </div>
        </AdminLayout>
    )
}
