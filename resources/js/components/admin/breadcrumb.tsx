import { ReactNode } from "react";

interface BreadcrumbProps {
    children: ReactNode;
}

export function BreadcrumbRoot({ children }: BreadcrumbProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center">
            {children}
        </div>
    );
}

export function BreadcrumbTitle({ children }: { children: ReactNode }) {
    return (
        <div className="flex-1">
            <h4 className="text-lg font-semibold m-0">{children}</h4>
        </div>
    );
}

export function BreadcrumbList({ children }: { children: ReactNode }) {
    return (
        <div className="text-left sm:text-right mt-2 sm:mt-0">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
                {children}
            </ol>
        </div>
    );
}

export function BreadcrumbItem({ children }: { children: ReactNode }) {
    return <li>{children}</li>;
}

interface BreadcrumbLinkProps {
    href?: string;
    children: ReactNode;
}

export function BreadcrumbLink({ href = "#", children }: BreadcrumbLinkProps) {
    return (
        <a
            href={href}
            className="hover:text-gray-700 transition-colors"
        >
            {children}
        </a>
    );
}


export function BreadcrumbPage({ children }: { children: ReactNode }) {
    return (
        <span className="text-gray-700 font-medium">
        {children}
        </span>
    );
}

export function BreadcrumbSeparator() {
    return <li className="text-gray-300">/</li>;
}