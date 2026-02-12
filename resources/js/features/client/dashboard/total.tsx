
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Activity } from "lucide-react"

export default function Total() {
    const totalNotes: number = 0
    const notesChange: number = 0
    const totalActivities: number = 0
    const activitiesChange: number = 0

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4 w-full">

            {/* Total Notes Card */}
            <Card className="relative overflow-hidden shadow-none">
                <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-indigo-50 rounded-lg">
                            <FileText className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div className={`px-2 py-1 rounded text-sm font-medium ${
                            notesChange >= 0 
                                ? 'bg-green-50 text-green-600' 
                                : 'bg-red-50 text-red-600'
                            }`}>
                            {notesChange >= 0 ? '+' : ''}{notesChange.toFixed(1)}%
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            Total Notes
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                            {totalNotes.toLocaleString()}
                        </p>
                    </div>

                    <div className="absolute right-4 bottom-4 opacity-5">
                        <FileText className="h-24 w-24 text-gray-400" />
                    </div>
                </CardContent>
            </Card>

            {/* Total Activities Card */}
            <Card className="relative overflow-hidden shadow-none">
                <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-indigo-50 rounded-lg">
                            <Activity className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div className={`px-2 py-1 rounded text-sm font-medium ${
                            activitiesChange >= 0 
                                ? 'bg-green-50 text-green-600' 
                                : 'bg-red-50 text-red-600'
                            }`}>
                            {activitiesChange >= 0 ? '+' : ''}{activitiesChange.toFixed(1)}%
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            Total Activities
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                            {totalActivities.toLocaleString()}
                        </p>
                    </div>

                    <div className="absolute right-4 bottom-4 opacity-5">
                        <Activity className="h-24 w-24 text-gray-400" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}