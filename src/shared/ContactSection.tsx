"use client"

import type React from "react"
import { useState } from "react"
import { BsGeoAltFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Pesan berhasil dikirim!")
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Hubungi Kami
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Masukkan nama lengkap"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Masukkan email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Masukkan subjek pesan"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tulis pesan anda"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3>

              <div className="flex mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <BsGeoAltFill size={28} />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium mb-1">Alamat</h5>
                  <p className="text-gray-600">
                    Gedung Teknik Elektro, Fakultas Teknik
                    <br />
                    Universitas Sam Ratulangi
                    <br />
                    Jl. Kampus Unsrat, Manado, Sulawesi Utara
                  </p>
                </div>
              </div>

              <div className="flex mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                    <AiFillInstagram size={28} />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium mb-1">Instagram</h5>
                  <p className="text-gray-600">@hmeftunsrat</p>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-medium mb-1">Jam Operasional Sekretariat</h5>
                <p className="text-gray-600">Senin - Jumat: 09.00 - 16.00 WITA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
