"use client";

import { useState } from "react";
import type React from "react";
import { MdClose } from "react-icons/md";
import toast from "react-hot-toast";
import { createMember } from "@/app/service/api";
import { MemberRequest, AddMemberFormProps } from "./types/member";

const INITIAL_FORM_DATA: MemberRequest = {
    name: "",
    role: "",
    division: "",
    year: new Date().getFullYear().toString(),
    status: "Active",
    created_at: "",
    updated_at: ""
};

const DIVISIONS = ["Non Bidang", "Keilmuwan & Penalaran", "Minat & Bakat", "Kesejahteraan Mahasiswa", "Umum & Sarana Prasarana", "Bursa & Pendanaan", "Kerohanian", "Humas & Kemitraan"] as const;

const STATUS_OPTIONS = ["Active", "Inactive", "Alumni"] as const;

export default function AddMemberForm({ isOpen, onClose, onSuccess }: AddMemberFormProps) {
    const [formData, setFormData] = useState<MemberRequest>(INITIAL_FORM_DATA);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData(INITIAL_FORM_DATA);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await createMember(formData);
            toast.success("Berhasil menambahkan pengurus!");
            resetForm();
            onClose();
            onSuccess?.();
        } catch (err) {
            console.error("Gagal menambahkan anggota:", err);
            toast.error("Gagal menambahkan anggota. Silakan coba lagi.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-md border border-gray-700">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-lg font-medium">Tambah Pengurus Baru</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors" type="button">
                        <MdClose className="h-5 w-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                Nama Lengkap
                            </label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600" required />
                        </div>

                        {/* Role Field */}
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                                Jabatan
                            </label>
                            <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600" required />
                        </div>

                        {/* Division Field */}
                        <div>
                            <label htmlFor="division" className="block text-sm font-medium text-gray-300 mb-1">
                                Divisi
                            </label>
                            <select id="division" name="division" value={formData.division} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600" required>
                                <option value="">Pilih Divisi</option>
                                {DIVISIONS.map((division) => (
                                    <option key={division} value={division}>
                                        {division}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Year Field */}
                        <div>
                            <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">
                                Tahun
                            </label>
                            <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} min="1900" max={new Date().getFullYear()} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600" required />
                        </div>

                        {/* Status Field */}
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-1">
                                Status
                            </label>
                            <select id="status" name="status" value={formData.status} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600" required>
                                {STATUS_OPTIONS.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-end space-x-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                            Batal
                        </button>
                        <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            {loading ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
