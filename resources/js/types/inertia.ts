export interface SharedProps {
    auth: {
        client: {
            id: number
            name: string
            email: string
            source: string | null
            path: string | null
            directory: string | null
            filename: string | null
            last_login_at: string | null
            created_at: string
            updated_at: string
            deleted_at: string | null
        } | null
        admin: {
            id: number
            name: string
            email: string
            source: string | null
            path: string | null
            directory: string | null
            filename: string | null
            last_login_at: string | null
            created_at: string
            updated_at: string
            deleted_at: string | null
        } | null
    }

    flash: {
        status: string | null
        message: string | null
    }
}

declare module '@inertiajs/core' {
    interface PageProps extends SharedProps {}
}