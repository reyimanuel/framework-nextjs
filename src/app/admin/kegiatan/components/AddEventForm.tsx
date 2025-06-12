"use client";
import { useState, useRef } from "react";
import type React from "react";
import Image from "next/image";
import { MdClose, MdCloudUpload } from "react-icons/md";
import type { AddEventFormProps } from "./types/event";
import { createEvent } from "@/app/service/api";
import { toast } from "react-hot-toast"

export default function AddEventForm({ isOpen, onClose, onSuccess }: AddEventFormProps) {
  const initialFormData = {
    event_name: "",
    event_date: "",
    event_time: "",
    event_location: "",
    event_description: "",
    event_organizer: "HME",
    event_status: "Active",
    event_category: "Akademik",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  const handleClose = () => {
    setFormData(initialFormData);
    setImageFile(null);
    setImagePreview(null);
    setError(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      setError("Gambar kegiatan wajib diunggah.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    data.append("event_image", imageFile);

    setIsSubmitting(true);
    setError(null);

    try {
      await createEvent(data);
      toast.success("Kegiatan berhasil ditambahkan!");
      onSuccess?.();
      handleClose();
    } catch (err) {
      console.error("Gagal menambahkan event:", err);
      toast.error("Terjadi kesalahan. Pastikan semua data terisi dengan benar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl border border-gray-700 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
          <h2 className="text-lg font-medium">Tambah Kegiatan Baru</h2>
          <button
            onClick={handleClose}
            className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
          >
            <MdClose className="h-5 w-5" />
          </button>
        </div>
        {/* Form tetap sama, hanya logic di belakangnya yang berubah */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Image Upload Section */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Gambar Kegiatan</label>
              <div
                className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${imagePreview ? "border-blue-500" : "border-gray-600 hover:border-gray-500"
                  }`}
                onClick={triggerFileInput}
              >
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" required />
                {imagePreview ? (
                  <div className="relative w-full h-48 overflow-hidden rounded-lg">
                    <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                  </div>
                ) : (
                  <div className="py-8">
                    <MdCloudUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-400">Klik untuk memilih gambar</p>
                    <p className="mt-1 text-xs text-gray-500">PNG, JPG, maks 5MB</p>
                  </div>
                )}
              </div>
            </div>

            {/* Form Fields Section */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Input fields lainnya (tidak ada perubahan di sini) */}
                <div className="md:col-span-2">
                  <label htmlFor="event_name" className="block text-sm font-medium text-gray-300 mb-1">Nama Kegiatan</label>
                  <input type="text" id="event_name" name="event_name" value={formData.event_name} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="event_date" className="block text-sm font-medium text-gray-300 mb-1">Tanggal</label>
                  <input type="date" id="event_date" name="event_date" value={formData.event_date} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="event_time" className="block text-sm font-medium text-gray-300 mb-1">Waktu</label>
                  <input type="time" id="event_time" name="event_time" value={formData.event_time} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="event_category" className="block text-sm font-medium text-gray-300 mb-1">Kategori</label>
                  <select id="event_category" name="event_category" value={formData.event_category} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="Akademik">Akademik</option>
                    <option value="Kompetisi">Kompetisi</option>
                    <option value="Pengabdian">Pengabdian</option>
                    <option value="Keorganisasian">Keorganisasian</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="event_status" className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                  <select id="event_status" name="event_status" value={formData.event_status} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="Active">Active</option>
                    <option value="Coming Soon">Coming Soon</option>
                    <option value="Completed">Completed</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="event_location" className="block text-sm font-medium text-gray-300 mb-1">Lokasi</label>
                  <input type="text" id="event_location" name="event_location" value={formData.event_location} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="event_organizer" className="block text-sm font-medium text-gray-300 mb-1">Penyelenggara</label>
                  <input type="text" id="event_organizer" name="event_organizer" value={formData.event_organizer} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="event_description" className="block text-sm font-medium text-gray-300 mb-1">Deskripsi</label>
                  <textarea id="event_description" name="event_description" value={formData.event_description} onChange={handleChange} rows={4} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Tampilkan pesan error dan atur tombol submit */}
          {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-900 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}