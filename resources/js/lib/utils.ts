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