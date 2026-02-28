import { BreadcrumbRoot, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbTitle, 
    BreadcrumbPage, BreadcrumbSeparator } from "@/components/admin/breadcrumb"
import AdminLayout from "@/layouts/admin-layout"
import Stats from "@/features/admin/dashboard/stats"
import NoteChart from "@/features/admin/dashboard/note-chart"

export default function Dashboard() {
    return (
        <AdminLayout>
            <BreadcrumbRoot>
                <BreadcrumbTitle>Dashboard</BreadcrumbTitle>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Data</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </BreadcrumbRoot>

            <Stats />

            <NoteChart />
        </AdminLayout>
    )
}