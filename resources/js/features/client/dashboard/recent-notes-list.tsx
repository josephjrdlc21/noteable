import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataItem {
  name: string;
  email: string;
  date: string;
}

export default function RecentNotesList() {
    const sampleData: DataItem[] = [
        {
            name: 'Jacob Hunter',
            email: 'jacob.hunter@email.com',
            date: '04 Oct, 2019',
        },
        {
            name: 'Ronald Taylor',
            email: 'ronald.taylor@email.com',
            date: '04 Oct, 2019',
        },
        {
            name: 'Barry Dick',
            email: 'barry.dick@email.com',
            date: '05 Oct, 2019',
        },
        {
            name: 'Juan Mitchell',
            email: 'juan.mitchell@email.com',
            date: '06 Oct, 2019',
        },
        {
            name: 'Jamal Burnett',
            email: 'jamal.burnett@email.com',
            date: '07 Oct, 2019',
        },
        {
            name: 'Neal Matthews',
            email: 'neal.matthews@email.com',
            date: '07 Oct, 2019',
        },
    ];

    return (
        <div className="w-full rounded-lg shadow-sm border mt-5">
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
                    {sampleData.map((item, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                            <TableCell className="pl-6 py-3 font-medium text-gray-900">{item.name}</TableCell>
                            <TableCell className="text-gray-600">{item.email}</TableCell>
                            <TableCell className="pr-6 text-gray-600">{item.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
