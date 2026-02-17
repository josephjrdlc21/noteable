import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RotateCcw, Funnel } from "lucide-react"

export default function Filters() {
    return (
        <form>
            <Card className="shadow-none gap-4">
                <CardHeader>
                    <CardTitle>Search Filters</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="keyword">Keyword</Label>
                            <Input id="keyword" type="text" placeholder="e.g., Name, Email" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="from">From</Label>
                            <Input id="from"  type="date"/>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="to">To</Label>
                            <Input id="to" type="date"/>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="gap-2">
                    <Button size="sm" variant="outline">
                        <RotateCcw /> Clear
                    </Button>
                    <Button size="sm">
                       <Funnel /> Filter
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
