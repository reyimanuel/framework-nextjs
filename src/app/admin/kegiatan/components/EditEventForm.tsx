"use client";
import { useState, useEffect, useRef } from "react";
import type React from "react";
import Image from "next/image";
import { MdClose, MdCloudUpload } from "react-icons/md";
import type { Event } from "@/app/admin/kegiatan/components/types/event";
import { updateEvent } from "@/app/service/api";
import type { EditEventFormProps } from "@/app/admin/kegiatan/components/types/event";

type UpdatableEventData = Omit<Event, "id" | "created_at" | "updated_at" | "event_image_url">;

export default function EditEventForm({ event, isOpen, onClose, onSuccess }: EditEventFormProps) {
    const [formData, setFormData] = useState<UpdatableEventData | null>(null);
    const [newImageFile, setNewImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (event) {
            const formattedDate = event.event_date ? new Date(event.event_date).toISOString().split('T')[0] : "";

            setFormData({
                event_name: event.event_name,
                event_date: formattedDate,
                event_time: event.event_time,
                event_location: event.event_location,
                event_description: event.event_description,
                event_organizer: event.event_organizer,
                event_status: event.event_status,
                event_category: event.event_category,
            });
            setImagePreview(event.event_image_url || null);
            setNewImageFile(null);
        }
    }, [event]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => (prev ? { ...prev, [name]: value } : null));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setNewImageFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!event || !formData) return;

        setIsSubmitting(true);
        setError(null);

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        if (newImageFile) {
            data.append("event_image", newImageFile);
        }

        try {
            await updateEvent(event.id, data);
            alert("Perubahan berhasil disimpan!");
            onSuccess();
            onClose();
        } catch (err) {
            console.error("Gagal memperbarui event:", err);
            setError("Terjadi kesalahan saat menyimpan perubahan.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    if (!isOpen || !event) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-4xl border border-gray-700 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
                    <h2 className="text-lg font-medium">Edit Kegiatan</h2>
                    <button onClick={onClose} className="p-1.5 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
                        <MdClose className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Image Upload Section */}
                        <div className="lg:col-span-1">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Gambar Kegiatan</label>
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${imagePreview ? "border-blue-500" : "border-gray-600 hover:border-gray-500"}`} onClick={triggerFileInput}>
                                <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                                {imagePreview ? (
                                    <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
                                        <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="py-8">
                                        <MdCloudUpload className="mx-auto h-12 w-12 text-gray-400" />
                                        <p className="mt-2 text-sm text-gray-400">Klik untuk memilih gambar</p>
                                        <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF hingga 5MB</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Form Fields Section */}
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label htmlFor="event_name" className="block text-sm font-medium text-gray-300 mb-1">
                                        Nama Kegiatan
                                    </label>
                                    <input type="text" id="event_name" name="event_name" value={formData?.event_name || ''} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>

                                <div>
                                    <label htmlFor="event_date" className="block text-sm font-medium text-gray-300 mb-1">
                                        Tanggal
                                    </label>
                                    <input type="date" id="event_date" name="event_date" value={formData?.event_date || ''} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>

                                <div>
                                    <label htmlFor="event_time" className="block text-sm font-medium text-gray-300 mb-1">
                                        Waktu
                                    </label>
                                    <input type="time" id="event_time" name="event_time" value={formData?.event_time || ''} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>

                                <div>
                                    <label htmlFor="event_category" className="block text-sm font-medium text-gray-300 mb-1">
                                        Kategori
                                    </label>
                                    <select id="event_category" name="event_category" value={formData?.event_category || ''} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                        <option value="Akademik">Akademik</option>
                                        <option value="Kompetisi">Kompetisi</option>
                                        <option value="Pengabdian">Pengabdian</option>
                                        <option value="Keorganisasian">Keorganisasian</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="event_status" className="block text-sm font-medium text-gray-300 mb-1">
                                        Status
                                    </label>
                                    <select id="event_status" name="event_status" value={formData?.event_status || ''} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                        <option value="Active">Active</option>
                                        <option value="Coming Soon">Coming Soon</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="event_location" className="block text-sm font-medium text-gray-300 mb-1">
                                        Lokasi
                                    </label>
                                    <input type="text" id="event_location" name="event_location" value={formData?.event_location || ''} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>

                                <div>
                                    <label htmlFor="event_organizer" className="block text-sm font-medium text-gray-300 mb-1">
                                        Penyelenggara
                                    </label>
                                    <input type="text" id="event_organizer" name="event_organizer" value={formData?.event_organizer || ''} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="event_description" className="block text-sm font-medium text-gray-300 mb-1">
                                        Deskripsi
                                    </label>
                                    <textarea id="event_description" name="event_description" value={formData?.event_description || ''} onChange={handleChange} rows={4} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {event.created_at && (
                        <div className="mt-6 pt-6 border-t border-gray-700">
                            <h4 className="text-sm font-medium text-gray-300 mb-3">Informasi Kegiatan</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                                <div>
                                    <span className="font-medium">ID:</span> {event.id}
                                </div>
                                <div>
                                    <span className="font-medium">Dibuat:</span>{" "}
                                    {new Date(event.created_at).toLocaleDateString("id-ID", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </div>
                                {event.updated_at && (
                                    <div className="md:col-span-2">
                                        <span className="font-medium">Terakhir diupdate:</span>{" "}
                                        {new Date(event.updated_at).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}

                    <div className="mt-6 flex justify-end space-x-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                            Batal
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
