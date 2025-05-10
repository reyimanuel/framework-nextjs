"use client"

import type React from "react"
import { useState } from "react"

export default function EventRegistrationSection() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    institusi: "",
    kegiatan: "",
    pesan: "",
    newsletter: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Pendaftaran berhasil dikirim!")
    // Reset form
    setFormData({
      nama: "",
      email: "",
      telepon: "",
      institusi: "",
      kegiatan: "",
      pesan: "",
      newsletter: false,
    })
  }

  return (
    <section className="py-12" id="daftar">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Daftar Kegiatan</h2>
              <p className="text-center text-gray-600 mb-8">
                Ingin berpartisipasi dalam kegiatan HME? Isi formulir di bawah ini untuk mendapatkan informasi terbaru
                tentang kegiatan yang akan datang.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="nama"
                      placeholder="Masukkan nama lengkap"
                      value={formData.nama}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="email"
                      placeholder="Masukkan email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="telepon"
                      placeholder="Masukkan nomor telepon"
                      value={formData.telepon}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="institusi" className="block text-sm font-medium text-gray-700 mb-1">
                      Institusi
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="institusi"
                      placeholder="Masukkan institusi"
                      value={formData.institusi}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="kegiatan" className="block text-sm font-medium text-gray-700 mb-1">
                    Kegiatan yang Diminati
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                    id="kegiatan"
                    value={formData.kegiatan}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Pilih kegiatan
                    </option>
                    <option value="Tranformasi Mahasiswa Fakultas Teknik UNSRAT Menuju Indonesia Emas 2045.">
                      Tranformasi Mahasiswa Fakultas Teknik UNSRAT Menuju Indonesia Emas 2045.
                    </option>
                    <option value="Workshop Internet of Things">Workshop Internet of Things</option>
                    <option value="Electrical Turnamen dan Artshow">Electrical Turnamen dan Artshow</option>
                    <option value="Study Club Basic Programming">Study Club Basic Programming</option>
                    <option value="Lomba Karya Tulis Ilmiah">Lomba Karya Tulis Ilmiah</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan (Opsional)
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="pesan"
                    rows={3}
                    placeholder="Tulis pesan atau pertanyaan anda"
                    value={formData.pesan}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      type="checkbox"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={handleCheckboxChange}
                    />
                    <label className="ml-2 block text-sm text-gray-700" htmlFor="newsletter">
                      Saya ingin menerima informasi terbaru tentang kegiatan HME UNSRAT
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Daftar Sekarang
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
