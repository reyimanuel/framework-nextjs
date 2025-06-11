"use client";
import { useState, useRef } from "react";
import type React from "react";
import Image from "next/image";
import { MdClose, MdCloudUpload } from "react-icons/md";
import { AddGalleryFormProps } from "@/app/admin/galeri/components/types/gallery";
import { createGallery } from "@/app/service/api";

export default function AddGalleryForm({ isOpen, onClose, onSuccess }: AddGalleryFormProps) {
    // 1. State formData disederhanakan, tanpa 'date'. Menggunakan 'name' secara langsung.
    const [formData, setFormData] = useState({
        name: "", // Langsung gunakan 'name' agar sesuai dengan API
        category: "Akademik", // Kategori default
        description: "",
    });

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setImageFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!imageFile) {
            setError("Silakan pilih sebuah gambar terlebih dahulu.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        const data = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        data.append("image", imageFile);

        try {
            await createGallery(data);

            alert("Foto berhasil ditambahkan!");
            onSuccess();
            handleClose();
        } catch (err) {
            console.error("Gagal membuat galeri:", err);
            setError("Terjadi kesalahan. Pastikan semua data terisi dengan benar.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setFormData({ name: "", category: "Akademik", description: "" });
        setImagePreview(null);
        setImageFile(null);
        setError(null);
        onClose();
    };

    const triggerFileInput = () => fileInputRef.current?.click();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl border border-gray-700 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
                    <h2 className="text-lg font-medium">Tambah Foto Baru</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                        <MdClose className="h-5 w-5" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${imagePreview ? "border-blue-500" : "border-gray-600 hover:border-gray-500"}`} onClick={triggerFileInput}>
                                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" required />
                                {imagePreview ? (
                                    <div className="relative w-full h-48 overflow-hidden rounded-lg">
                                        <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="py-8">
                                        <MdCloudUpload className="mx-auto h-12 w-12 text-gray-400" />
                                        <p className="mt-2 text-sm text-gray-400">Klik untuk memilih foto atau seret foto ke sini</p>
                                        <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF hingga 5MB</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                                Judul Foto
                            </label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                                Kategori
                            </label>
                            <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                <option value="Akademik">Akademik</option>
                                <option value="Kompetisi">Kompetisi</option>
                                <option value="Pengabdian">Pengabdian</option>
                                <option value="Keorganisasian">Keorganisasian</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                                Deskripsi
                            </label>
                            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                            Batal
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" disabled={!imagePreview}>
                            {isSubmitting ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                    {error && <p className="text-red-400 text-sm text-center pt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
}
