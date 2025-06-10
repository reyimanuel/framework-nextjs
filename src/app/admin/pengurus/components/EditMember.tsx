"use client";

import { useState, useEffect } from "react"
import { MdClose } from "react-icons/md"
import type { Member, EditMemberFormProps } from "@/app/admin/pengurus/components/types/member"

const INITIAL_FORM_DATA: Member = {
    id: 0,
    name: "",
    role: "",
    division: "",
    year: new Date().getFullYear().toString(),
    status: "Active",
    created_at: "",
    updated_at: ""
}

const DIVISIONS = [
    "Non Bidang", "Keilmuwan & Penalaran", "Minat & Bakat", "Kesejahteraan Mahasiswa",
    "Umum & Sarana Prasarana", "Bursa & Pendanaan", "Kerohanian", "Humas & Kemitraan"
] as const

const STATUS_OPTIONS = ["Active", "Inactive", "Alumni"] as const

export default function EditMemberForm({ member, isOpen, onClose, onSubmit }: EditMemberFormProps) {
    const [formData, setFormData] = useState<Member>(INITIAL_FORM_DATA)

    useEffect(() => {
        if (!isOpen) {
            setFormData(INITIAL_FORM_DATA)
        }
    }, [isOpen])

    useEffect(() => {
        if (member) {
            setFormData(member)
        }
    }, [member])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev: Member) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    if (!isOpen || !member) return null

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl border border-gray-700 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
                    <h2 className="text-lg font-medium">Edit Pengurus</h2>
                    <button onClick={onClose} className="p-1.5 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors" aria-label="Close modal" type="button">
                        <MdClose className="h-5 w-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

                    {formData.created_at && (
                        <div className="mt-6 pt-6 border-t border-gray-700">
                            <h4 className="text-sm font-medium text-gray-300 mb-3">Informasi Kegiatan</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                                <div>
                                    <span className="font-medium">ID:</span> {formData.id}
                                </div>
                                <div>
                                    <span className="font-medium">Dibuat:</span>{" "}
                                    {new Date(formData.created_at).toLocaleDateString("id-ID", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </div>
                                {formData.updated_at && (
                                    <div className="md:col-span-2">
                                        <span className="font-medium">Terakhir diupdate:</span>{" "}
                                        {new Date(formData.updated_at).toLocaleDateString("id-ID", {
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

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                            Batal
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Simpan Perubahan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
