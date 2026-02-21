import { BreadcrumbRoot, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbTitle, 
    BreadcrumbPage, BreadcrumbSeparator } from "@/components/admin/breadcrumb"
import ClientDetails from "@/features/admin/clients/client-details"
import AdminLayout from "@/layouts/admin-layout"
import { Client } from "@/types/admin/client"

export default function Show({ client }: { client: Client}) {
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

            <div className="w-full max-w-xl">
                <ClientDetails 
                    client={client} 
                />
            </div>
        </AdminLayout>
    )
}