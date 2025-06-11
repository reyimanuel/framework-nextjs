export interface GalleryItem {
    id: number;
    name: string;
    description: string;
    image_url: string;
    category: string;
    created_at: string;
    updated_at: string;
}

export interface StatsData {
    Akademik: number;
    Kompetisi: number;
    Pengabdian: number;
    Keorganisasian: number;
}

export interface AddGalleryFormProps {
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
}

export interface GalleryGridProps {
    refreshTrigger: boolean;
    onRefresh: () => void;
}

export interface ViewGalleryModalProps {
    item: GalleryItem | null
    onClose: () => void
}

export interface EditGalleryFormProps {
    item: GalleryItem | null;
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}