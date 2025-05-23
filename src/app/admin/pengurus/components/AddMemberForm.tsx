"use client"
import { useState } from "react"
import type React from "react"
import { MdClose } from "react-icons/md"
import { createMember } from "@/app/service/api"
import toast from "react-hot-toast"

interface MemberRequest {
    name: string
    role: string
    division: string
    year: string
    status: string
}

interface AddMemberFormProps {
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}

export default function AddMemberForm({ isOpen, onClose, onSuccess}: AddMemberFormProps) {
    const [formData, setFormData] = useState<MemberRequest>({
        name: "",
        role: "",
        division: "",
        year: new Date().getFullYear().toString(),
        status: "Active",
    })

    const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await createMember(formData)
      toast.success("Berhasil menambahkan pengurus!")
      setFormData({
        name: "",
        role: "",
        division: "",
        year: new Date().getFullYear().toString(),
        status: "Active",
      })
      onClose()
      if (onSuccess) onSuccess()
    } catch (err) {
      console.error("Gagal menambahkan anggota:", err)
    toast.error("Gagal menambahkan anggota. Silakan coba lagi.")
    } finally {
      setLoading(false)
    }
  }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-md border border-gray-700">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-lg font-medium">Tambah Pengurus Baru</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                    >
                        <MdClose className="h-5 w-5" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="space-y-4">
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

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
