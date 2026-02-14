import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  	return twMerge(clsx(inputs))
}

export function statusBadgeClass(status?: string | null): string {
	if (!status) return "";

	switch (status.toLowerCase()){
		case "active":
			return "default";

		case "inactive":
			return "destructive";
		
		default:
			return "default";
	}
}

export function initialsFormat(name?: string | null): string {
	if (!name) return "";

	const words = name.trim().split(/\s+/);
	const initials = words.slice(0, 2).map(word => word[0]?.toUpperCase() || "").join("");

	return initials;
}

export function formatDateTime(isoString: string): string {
	if (!isoString) return '';

	const date = new Date(isoString);

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	};

	return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function toHtmlDate(value?: string | Date | null): string {
    if (!value) return "";

    const date = value instanceof Date ? value : new Date(value);

    if (isNaN(date.getTime())) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}