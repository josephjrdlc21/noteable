import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RecentNotes } from "@/types/client/dashboard";
import { formatDateTime } from "@/lib/utils";

export default function RecentNotesList({ recent_notes }: { recent_notes: RecentNotes[] }) {
    const notes = Array.isArray(recent_notes) ? recent_notes : recent_notes ? [recent_notes] : []

    return (
        <div className="w-full rounded-lg border mt-5">
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold ">Latest Notes</h2>
            </div> 

            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-200 hover:bg-gray-200">
                        <TableHead className="pl-6 font-semibold text-gray-700">Name</TableHead>
                        <TableHead className="font-semibold text-gray-700">Note</TableHead>
                        <TableHead className="pr-6 font-semibold text-gray-700">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {notes?.length > 0 ? (
                        notes.map((item, index) => (
                            <TableRow key={index} className="hover:bg-gray-50">
                                <TableCell className="pl-6 py-3 font-medium text-gray-900">
                                    {item.user_name}
                                </TableCell>
                                <TableCell className="text-gray-600">
                                    {item.title}
                                </TableCell>
                                <TableCell className="pr-6 text-gray-600">
                                    {formatDateTime(item.created_at)}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={3}
                                className="text-center py-6 text-gray-500"
                            >
                                No recent notes
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
