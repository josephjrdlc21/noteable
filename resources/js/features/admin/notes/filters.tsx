import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RotateCcw, Funnel } from "lucide-react"
import { Filter } from "@/types/admin/note"
import { useState } from "react"
import { router } from "@inertiajs/react"
import { index } from "@/routes/admin/notes" 

export default function Filters({ filters }: { filters: Filter }) {

    const [keyword, setKeyword] = useState(filters?.keyword || "")
    const [startDate, setStartDate] = useState(filters?.start_date || "")
    const [endDate, setEndDate] = useState(filters?.end_date || "")

    const handleSearch = () => {
        router.get(index.url(), {
            keyword: keyword,
            start_date: startDate,
            end_date: endDate,
        }, {
            preserveState: true,
            preserveScroll: true,
        })
    }

    const handleReset = () => {
        setKeyword("")
        setStartDate("")
        setEndDate("")

        router.get(index.url(), {}, {
            preserveState: true,
            preserveScroll: true,
        })
    }

    return (
        <Card className="shadow-none gap-4">
            <CardHeader>
                <CardTitle>Search Filters</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="keyword">Keyword</Label>
                        <Input id="keyword" type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g., Title, Username" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="from">From</Label>
                        <Input id="from"  type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="to">To</Label>
                        <Input id="to" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="gap-2">
                <Button size="sm" variant="outline" onClick={handleReset}>
                    <RotateCcw /> Clear
                </Button>
                <Button type="button" size="sm" onClick={handleSearch}>
                    <Funnel /> Filter
                </Button>
            </CardFooter>
        </Card>
    )
}
