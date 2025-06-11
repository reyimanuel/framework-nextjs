export interface Event {
    id: number;
    event_name: string;
    event_date: string;
    event_time: string;
    event_location: string;
    event_description: string;
    event_organizer: string;
    event_category: string;
    event_status: "Coming Soon" | "Inactive" | "Active" | "Completed";
    event_image_url?: string;
    created_at: string;
    updated_at: string;
}

export interface Status {
    id: number;
    event_status: "Active" | "Coming Soon" | "Completed" | "Inactive";
}

export interface Stats {
    active: number;
    comingSoon: number;
    completed: number;
    inactive: number;
}

export interface AddEventFormProps {
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
}

export interface EditEventFormProps {
    isOpen: boolean
    onSuccess: () => void
    onClose: () => void
    event: Event | null
}

export interface EventTableProps {
    refreshTrigger?: boolean;
    onRefresh: () => void;
}

export interface ViewEventModalProps {
    event: Event | null
    onClose: () => void
    onEdit: (event: Event) => void
}

// Tipe permintaan tambah/edit kegiatan, tanpa id
export type MemberRequest = Omit<Event, "id">

// Tambahan jika kamu butuh versi partial (misal untuk form validasi opsional)
export type PartialMember = Partial<Event>