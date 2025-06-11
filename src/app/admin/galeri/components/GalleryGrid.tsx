"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdZoomOutMap, MdEdit, MdDelete, MdFilterList, MdSearch } from "react-icons/md";
import { fetchAllGalleries, deleteGallery } from "@/app/service/api";
import { GalleryItem, GalleryGridProps } from "@/app/admin/galeri/components/types/gallery";
import ViewGalleryModal from "@/app/admin/galeri/components/ViewGalleryModal";
import EditGalleryForm from "@/app/admin/galeri/components/EditGalleryForm";

export default function GalleryGrid({ refreshTrigger, onRefresh }: GalleryGridProps) {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState<string>("All");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [galleryToDelete, setGalleryToDelete] = useState<number | null>(null);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [viewGallery, setViewGallery] = useState<GalleryItem | null>(null);
    const [editGallery, setEditGallery] = useState<GalleryItem | null>(null);

    useEffect(() => {
        const loadGalleries = async () => {
            try {
                setLoading(true);
                const data: GalleryItem[] = await fetchAllGalleries();
                setGalleryItems(data);
                setError(null);
            } catch (err) {
                setError("Gagal memuat galeri. Silakan coba lagi nanti.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadGalleries();
    }, [refreshTrigger]);

    const getCategoryBadgeClass = (category: string) => {
        switch (category) {
            case "Akademik":
                return "bg-blue-600 border-blue-700";
            case "Kompetisi":
                return "bg-purple-600 border-purple-700";
            case "Pengabdian":
                return "bg-green-600 border-green-700";
            case "Keorganisasian":
                return "bg-red-600 border-red-700";
            default:
                return "bg-gray-600 border-gray-700";
        }
    };

    const filterOptions = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

    const filteredItems = galleryItems.filter((item) => (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase())) && (selectedFilter === "All" || item.category === selectedFilter));

    const handleEditGallery = (gallery: GalleryItem) => {
        setEditGallery(gallery);
    };

    const handleEditSubmit = () => {
        onRefresh();
    };

    const handleDeleteGallery = (id: number) => {
        setGalleryToDelete(id);
        setIsDeleteModalOpen(true);
    };

    const handleViewGallery = (gallery: GalleryItem) => {
        setViewGallery(gallery);
    };

    const confirmDeleteGallery = async () => {
        if (!galleryToDelete) return;

        setIsDeleting(true);

        try {
            await deleteGallery(galleryToDelete);

            alert("Kegiatan berhasil dihapus!");

            onRefresh();
        } catch (error) {
            console.error("Gagal menghapus Gallery:", error);
            alert("Gagal menghapus kegiatan. Silakan coba lagi.");
        } finally {
            setIsDeleteModalOpen(false);
            setGalleryToDelete(null);
            setIsDeleting(false);
        }
    };

    return (
        <>
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-lg font-medium mb-2 sm:mb-0">Galeri Foto</h2>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative">
                            <input type="text" placeholder="Cari foto..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-gray-700 text-white text-sm rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            <MdSearch className="absolute left-2.5 top-2.5 text-gray-400" />
                        </div>
                        <div className="flex gap-2">
                            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="bg-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                {filterOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
                                <MdFilterList className="text-gray-300" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Konten Grid */}
                <div className="p-4">
                    {loading ? (
                        <div className="text-center py-8 text-gray-400">Memuat foto...</div>
                    ) : error ? (
                        <div className="text-center py-8 text-gray-400">{error}</div>
                    ) : filteredItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredItems.map((item) => (
                                <div key={item.id} className="group relative bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <Image src={item.image_url || "/placeholder.svg"} alt={item.name} width={400} height={300} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                                        <div className="self-end flex space-x-1">
                                            <button onClick={() => handleViewGallery(item)} className="p-1.5 bg-gray-800/80 rounded-full text-white hover:bg-blue-600 transition-colors" aria-label="View image">
                                                <MdZoomOutMap className="h-4 w-4" />
                                            </button>
                                            <button onClick={() => handleEditGallery(item)} className="p-1.5 bg-gray-800/80 rounded-full text-white hover:bg-yellow-600 transition-colors" aria-label="Edit image">
                                                <MdEdit className="h-4 w-4" />
                                            </button>
                                            <button onClick={() => handleDeleteGallery(item.id)} className="p-1.5 bg-gray-800/80 rounded-full text-white hover:bg-red-600 transition-colors" aria-label="Delete image">
                                                <MdDelete className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium text-white truncate">{item.name}</h3>
                                        <div className="flex items-center justify-between mt-1">
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded ${getCategoryBadgeClass(item.category)}`}>{item.category}</span>
                                            <span className="text-xs text-gray-400">
                                                {" "}
                                                {new Date(item.created_at).toLocaleDateString("id-ID", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray-400">Tidak ada foto yang ditemukan.</div>
                    )}
                </div>

                {/* Pagination */}
                <div className="px-6 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700">
                    <div className="text-sm text-gray-400 mb-2 sm:mb-0">
                        Menampilkan <span className="font-medium">{filteredItems.length}</span> dari <span className="font-medium">{galleryItems.length}</span> foto
                    </div>
                    <div className="flex space-x-1">
                        <button className="px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors">Previous</button>
                        <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">1</button>
                        <button className="px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors">Next</button>
                    </div>
                </div>
            </div>

            <ViewGalleryModal item={viewGallery} onClose={() => setViewGallery(null)} />

            <EditGalleryForm item={editGallery} isOpen={editGallery !== null} onClose={() => setEditGallery(null)} onSuccess={handleEditSubmit} />

            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                    <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-md border border-gray-700 p-6">
                        <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
                        <p className="text-gray-300 mb-6">Apakah Anda yakin ingin menghapus foto ini? Tindakan ini tidak dapat dibatalkan.</p>
                        <div className="flex justify-end space-x-3">
                            <button onClick={confirmDeleteGallery} disabled={isDeleting} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                                Batal
                            </button>
                            <button onClick={confirmDeleteGallery} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                                {isDeleting ? "Menghapus..." : "Hapus"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
