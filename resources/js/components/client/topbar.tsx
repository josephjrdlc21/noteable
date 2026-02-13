import { NotebookText, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle,
    SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Profile from "@/components/client/profile"
import { dashboard } from "@/routes/client"
import { index } from "@/routes/client/notes"

export default function Topbar() {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-sm">
                        <NotebookText className="size-4" />
                    </div>
                    <span className="font-semibold">Noteable</span>
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href={dashboard.url()}
                        className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                    >
                        Dashboard
                    </a>
                    <a
                        href={index.url()}
                        className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                    >
                        Notes
                    </a>
                    <Profile />
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <Profile />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-64">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                <SheetDescription>Navigate between dashboard and notes.</SheetDescription>
                            </SheetHeader>
                            <div className="mx-2 flex flex-col gap-4">
                                <a
                                    href="#"
                                    className="rounded-md px-2 py-2 text-sm font-medium transition hover:bg-primary/10"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-2 py-2 text-sm font-medium transition hover:bg-primary/10"
                                >
                                    Notes
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
