"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Impor Link untuk navigasi
import { MdZoomOutMap } from "react-icons/md";
import { fetchAllGalleries } from "@/app/service/api";
import { GalleryItem } from "@/app/admin/galeri/components/types/gallery";
import AddGalleryForm from "@/app/admin/galeri/components/AddGalleryForm";
import ViewGalleryModal from "@/app/admin/galeri/components/ViewGalleryModal";

export default function GalleryPreview() {
    // 1. State untuk menampung data dari API, loading, dan modal
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(false);
    const [viewGallery, setViewGallery] = useState<GalleryItem | null>(null);

    // 2. useEffect untuk mengambil data dari API saat komponen dimuat atau direfresh
    useEffect(() => {
        const loadLatestGalleries = async () => {
            setLoading(true);
            try {
                const allItems = await fetchAllGalleries();
                // Ambil 5 item terbaru saja untuk preview
                setGalleryItems((allItems || []).slice(0, 5));
            } catch (error) {
                console.error("Gagal memuat galeri terbaru:", error);
            } finally {
                setLoading(false);
            }
        };
        loadLatestGalleries();
    }, [refreshTrigger]);

    // 3. Fungsi untuk memicu refresh setelah upload berhasil
    const handleUploadSuccess = () => {
        setIsAddModalOpen(false); // Tutup modal
        setRefreshTrigger(prev => !prev); // Ubah trigger untuk menjalankan ulang useEffect
    };

    const handleViewGallery = (gallery: GalleryItem) => {
        setViewGallery(gallery);
    };

    return (
        <>
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-lg font-medium">Galeri Terbaru</h2>
                    {/* 4. Gunakan <Link> dari Next.js untuk navigasi yang lebih baik */}
                    <Link href="/admin/galeri" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                        Lihat Semua
                    </Link>
                </div>
                <div className="p-4">
                    {loading ? (
                        <div className="text-center text-gray-400 py-8">Memuat galeri...</div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {galleryItems.map((item) => (
                                <div key={item.id} className="relative overflow-hidden rounded-lg group cursor-pointer">
                                    {/* 5. Perbaiki komponen Image agar lebih andal */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <Image src={item.image_url} alt={item.name} width={400} height={300} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                                        <div className="self-end">
                                            <button
                                                onClick={() => handleViewGallery(item)}
                                                className="p-1.5 bg-gray-800/80 rounded-full text-white hover:bg-blue-600"
                                            >
                                                <MdZoomOutMap className="h-4 w-4" />
                                            </button>
                                        </div>
                                        {/* 6. Gunakan 'name' sesuai data API */}
                                        <p className="text-white text-sm font-medium truncate">{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="p-4 border-t border-gray-700 bg-gray-800/50">
                    {/* 7. Hubungkan tombol upload ke state modal */}
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                        Upload Foto Baru
                    </button>
                </div>
            </div>

            <ViewGalleryModal item={viewGallery} onClose={() => setViewGallery(null)} />

            {/* 8. Render modal AddGalleryForm secara kondisional */}
            <AddGalleryForm
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSuccess={handleUploadSuccess}
            />
        </>
    );
}