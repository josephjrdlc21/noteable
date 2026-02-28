import { Card } from "@/components/ui/card"
import { Users, User, Notebook } from "lucide-react"

export default function Stats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="rounded-xl border p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-default group gap-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
                    <span className="text-slate-400"><Users className="w-4 h-4" /></span>
                    <span className="tracking-wide uppercase text-xs font-semibold">Users</span>
                </div>
                <div
                    className="text-4xl font-bold text-slate-800 mb-3 tabular-nums"
                    style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
                >
                    46
                </div>
                <div className="text-slate-400 font-normal text-sm">
                    Total number of users in the system
                </div>
                <div
                    className="mt-4 h-0.5 rounded-full transition-all duration-500  bg-slate-300 group-hover:bg-slate-500"
                    style={{ width: "100%" }}
                />
            </Card>

            <Card className="rounded-xl border p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-default group gap-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
                    <span className="text-slate-400"><User className="w-4 h-4" /></span>
                    <span className="tracking-wide uppercase text-xs font-semibold">Clients</span>
                </div>
                <div
                    className="text-4xl font-bold text-slate-800 mb-3 tabular-nums"
                    style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
                >
                    39
                </div>
                <div className="text-slate-400 font-normal text-sm">
                    Total number of clients in the system
                </div>
                <div
                    className="mt-4 h-0.5 rounded-full transition-all duration-500  bg-slate-300 group-hover:bg-slate-500"
                    style={{ width: "100%" }}
                />
            </Card>

            <Card className="rounded-xl border p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-default group gap-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
                    <span className="text-slate-400"><Notebook className="w-4 h-4" /></span>
                    <span className="tracking-wide uppercase text-xs font-semibold">Notes</span>
                </div>
                <div
                    className="text-4xl font-bold text-slate-800 mb-3 tabular-nums"
                    style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
                >
                    50
                </div>
                <div className="text-slate-400 font-normal text-sm">
                    Total number of notes in the system
                </div>
                <div
                    className="mt-4 h-0.5 rounded-full transition-all duration-500  bg-slate-300 group-hover:bg-slate-500"
                    style={{ width: "100%" }}
                />
            </Card>
        </div>
    )
}
