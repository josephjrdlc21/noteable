import { BreadcrumbRoot, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbTitle, 
    BreadcrumbPage, BreadcrumbSeparator } from "@/components/admin/breadcrumb"
import CreateForm from "@/features/admin/users/create-form"
import AdminLayout from "@/layouts/admin-layout"

export default function Create() {
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
                        <BreadcrumbPage>Create User</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </BreadcrumbRoot>

            <div className="w-full max-w-2xl">
                <CreateForm />
            </div>
        </AdminLayout>
    )
}
