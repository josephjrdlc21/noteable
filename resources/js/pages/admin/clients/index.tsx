import { BreadcrumbRoot, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbTitle, 
    BreadcrumbPage, BreadcrumbSeparator } from "@/components/admin/breadcrumb"
import AdminLayout from "@/layouts/admin-layout"
import Filters from "@/features/admin/clients/filters"
import ClientList from "@/features/admin/clients/client-list"
import { Pagination, Filter } from "@/types/admin/client"

export default function Index({ records, filters }: { records: Pagination, filters: Filter}) {
    return (
        <AdminLayout>
            <BreadcrumbRoot>
                <BreadcrumbTitle>Clients</BreadcrumbTitle>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Clients</BreadcrumbLink>
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

            <ClientList 
                records={records} 
            />
        </AdminLayout>
    )
}
