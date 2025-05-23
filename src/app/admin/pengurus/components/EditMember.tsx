"use client"
import { useState, useEffect } from "react"
import type React from "react"
import { MdClose } from "react-icons/md"

export interface MemberRequest {
    id: number
    name: string
    role: string
    division: string
    year: string
    status: string
}

interface EditMemberRequestFormProps {
    MemberRequest: MemberRequest | null
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: MemberRequest) => void
}

export default function EditMemberRequestForm({ MemberRequest, isOpen, onClose, onSubmit }: EditMemberRequestFormProps) {
    const [formData, setFormData] = useState<MemberRequest>({
        id: 0,
        name: "",
        role: "",
        division: "",
        year: new Date().getFullYear().toString(),
        status: "Active",
    })

    useEffect(() => {
    if (!isOpen) {
        setFormData({
            id: 0,
            name: "",
            role: "",
            division: "",
            year: new Date().getFullYear().toString(),
            status: "Active",
        })
    }
}, [isOpen])

    // Update form data when MemberRequest changes
    useEffect(() => {
        if (MemberRequest) {
            setFormData(MemberRequest)
        }
    }, [MemberRequest])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    if (!isOpen || !MemberRequest) return null

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl border border-gray-700 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
                    <h2 className="text-lg font-medium">Edit Pengurus</h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <MdClose className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                                Jabatan
                            </label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="division" className="block text-sm font-medium text-gray-300 mb-1">
                                Divisi
                            </label>
                            <select
                                id="division"
                                name="division"
                                value={formData.division}
                                onChange={handleChange}
                                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="Non Bidang">Non Bidang</option>
                                <option value="Keilmuwan & Penalaran">Keilmuwan & Penalaran</option>
                                <option value="Minat & Bakat">Minat & Bakat</option>
                                <option value="Kesejahteraan Mahasiswa">Kesejahteraan Mahasiswa</option>
                                <option value="Umum & Sarana Prasarana">Umum & Sarana Prasarana</option>
                                <option value="Bursa & Pendanaan">Bursa & Pendanaan</option>
                                <option value="Kerohanian">Kerohanian</option>
                                <option value="Humas & Kemitraan">Humas & Kemitraan</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">
                                Tahun
                            </label>
                            <input
                                type="number"
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                min="1900"
                                max={new Date().getFullYear()}
                                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-1">
                                Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Alumni">Alumni</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Simpan Perubahan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
