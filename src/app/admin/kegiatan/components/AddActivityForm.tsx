"use client"
import { useState } from "react"
import type React from "react"

import { MdClose } from "react-icons/md"

interface ActivityFormData {
  name: string
  date: string
  category: string
  location: string
  description: string
  status: string
}

interface AddActivityFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: ActivityFormData) => void
}

export default function AddActivityForm({ isOpen, onClose, onSubmit }: AddActivityFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    category: "Talkshow",
    location: "",
    description: "",
    status: "Draft",
  })

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
    setFormData({
      name: "",
      date: "",
      category: "Talkshow",
      location: "",
      description: "",
      status: "Draft",
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl border border-gray-700 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
          <h2 className="text-lg font-medium">Tambah Kegiatan Baru</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
          >
            <MdClose className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nama Kegiatan
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
              <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                Tanggal
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                Kategori
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Talkshow">Talkshow</option>
                <option value="Webinar">Webinar</option>
                <option value="Study Club">Study Club</option>
                <option value="Tournament">Tournament</option>
                <option value="Workshop">Workshop</option>
                <option value="Seminar">Seminar</option>
                <option value="Karya Tulis">Karya Tulis</option>
                <option value="Training">Training</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                Lokasi
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
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
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                Deskripsi
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
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
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
