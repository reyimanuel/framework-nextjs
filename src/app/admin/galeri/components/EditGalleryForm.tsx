"use client";
import { useState, useEffect, useRef } from "react";
import type React from "react";
import Image from "next/image";
import { MdClose, MdCloudUpload } from "react-icons/md";
import type { GalleryItem, EditGalleryFormProps } from "@/app/admin/galeri/components/types/gallery";
import { updateGallery } from "@/app/service/api";

type UpdatableGalleryData = Omit<GalleryItem, "id" | "image_url" | "created_at" | "updated_at">;

const initialFormData: UpdatableGalleryData = {
    name: "",
    category: "Akademik",
    description: "",
};

export default function EditGalleryForm({ item, isOpen, onClose, onSuccess }: EditGalleryFormProps) {
    const [formData, setFormData] = useState<UpdatableGalleryData>(initialFormData);
    const [newImageFile, setNewImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // useEffect untuk mengisi form saat item berubah
    useEffect(() => {
        if (item) {
            setFormData({
                name: item.name,
                category: item.category,
                description: item.description,
            });
            setImagePreview(item.image_url || null);
            setNewImageFile(null); // Reset pilihan file baru setiap kali modal dibuka
            setError(null);
        } else {
            setFormData(initialFormData); // Reset form jika item tidak ada
        }
    }, [item]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 3. Perbaiki handleImageChange untuk tidak mengubah formData
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setNewImageFile(file); // Simpan file asli untuk diunggah

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string); // Hanya update preview
            };
            reader.readAsDataURL(file);
        }
    };

    // 4. Implementasikan handleSubmit dengan logika API
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!item || !formData) return;

        setIsSubmitting(true);
        setError(null);

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        // Hanya tambahkan gambar jika pengguna memilih file BARU
        if (newImageFile) {
            data.append("image_file", newImageFile); // Pastikan nama field 'image_file' sesuai backend
        }

        try {
            await updateGallery(item.id, data); // Panggil API update
            alert("Perubahan berhasil disimpan!");
            onSuccess(); // Panggil onSuccess untuk memicu refresh
            onClose(); // Tutup modal
        } catch (err) {
            console.error("Gagal memperbarui galeri:", err);
            const errorMessage = "Terjadi kesalahan saat menyimpan perubahan.";
            setError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const formatDateTime = (dateTimeString: string) => {
        return new Date(dateTimeString).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (!isOpen || !item) return null;
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl border border-gray-700 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
                    <h2 className="text-lg font-medium">Edit Foto</h2>
                    <button onClick={onClose} className="p-1.5 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
                        <MdClose className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Image Upload Section */}
                        <div className="lg:col-span-1">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Gambar</label>
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${imagePreview ? "border-blue-500" : "border-gray-600 hover:border-gray-500"}`} onClick={triggerFileInput}>
                                <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                                {imagePreview ? (
                                    <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
                                        <Image src={imagePreview} alt="Preview" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="py-8">
                                        <MdCloudUpload className="mx-auto h-12 w-12 text-gray-400" />
                                        <p className="mt-2 text-sm text-gray-400">Klik untuk memilih foto</p>
                                        <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF hingga 5MB</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Form Fields Section */}
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                        Nama Foto
                                    </label>
                                    <input type="text" id="name" name="name" value={formData?.name} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>

                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                                        Kategori
                                    </label>
                                    <select id="category" name="category" value={formData?.category} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                        <option value="Akademik">Akademik</option>
                                        <option value="Kompetisi">Kompetisi</option>
                                        <option value="Pengabdian">Pengabdian</option>
                                        <option value="Keorganisasian">Keorganisasian</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                                        Deskripsi
                                    </label>
                                    <textarea id="description" name="description" value={formData?.description} onChange={handleChange} rows={4} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Masukkan deskripsi foto..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Info */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">Informasi Foto</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                            <div>
                                <span className="font-medium">ID:</span> {item.id}
                            </div>
                            <div>
                                <span className="font-medium">Kategori Asli:</span> {item.category}
                            </div>
                            <div>
                                <span className="font-medium">Dibuat:</span> {formatDateTime(item.created_at)}
                            </div>
                            <div>
                                <span className="font-medium">Terakhir diupdate:</span> {formatDateTime(item.updated_at)}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                            Batal
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
                        </button>
                    </div>
                    {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
                </form>
            </div>
        </div>
    );
}
