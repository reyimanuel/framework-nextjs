"use client"

import type React from "react"

import { useState } from "react"
import { BsSend } from "react-icons/bs"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacyPolicy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Pesan berhasil dikirim!")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacyPolicy: false,
    })
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Kirim Pesan</h2>
      <div className="flex justify-center mb-8">
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded"></div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Nomor Telepon"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              required
            >
              <option value="" disabled>
                Pilih Subjek
              </option>
              <option value="Informasi Umum">Informasi Umum</option>
              <option value="Kerjasama">Kerjasama</option>
              <option value="Kegiatan">Kegiatan</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Pesan"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
            />
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <BsSend className="inline-block mr-2" />
            Kirim Pesan
          </button>
        </div>
      </form>
    </div>
  )
}
