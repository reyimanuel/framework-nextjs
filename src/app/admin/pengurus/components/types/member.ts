// types/member.ts

// Tipe utama untuk semua pengurus
export interface Member {
    id: number
    name: string
    role: string
    division: string
    year: string
    status: "Active" | "Inactive" | "Alumni"
    created_at: string
    updated_at: string
}

export interface Division {
    name: string
    count: number
    color: string
}

export interface AddMemberFormProps {
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}

export interface EditMemberFormProps {
    member: Member | null
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: Member) => void
}

export interface MemberTableProps {
    refreshTrigger?: boolean;
}


// Tipe permintaan tambah/edit pengurus, tanpa id
export type MemberRequest = Omit<Member, "id">

// Tambahan jika kamu butuh versi partial (misal untuk form validasi opsional)
export type PartialMember = Partial<Member>

