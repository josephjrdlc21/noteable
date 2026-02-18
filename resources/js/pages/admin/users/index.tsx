import { BreadcrumbRoot, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbTitle, 
    BreadcrumbPage, BreadcrumbSeparator } from "@/components/admin/breadcrumb"
import AdminLayout from "@/layouts/admin-layout"
import Filters from "@/features/admin/users/filters"
import UserList from "@/features/admin/users/user-list"
import { Pagination, Filter } from "@/types/admin/user"

export default function Index({ records, filters }: { records: Pagination, filters: Filter}) {
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
                        <BreadcrumbPage>List</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </BreadcrumbRoot>

            <Filters 
                filters={filters} 
            />

            <UserList 
                records={records} 
            />
        </AdminLayout>
    )
}
