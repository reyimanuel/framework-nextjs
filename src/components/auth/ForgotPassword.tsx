"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import InfoAlert from "@/components/auth/InfoAlert"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
    // Here you would typically send a password reset email
  }

  return (
    <div className="p-6">
      {!isSubmitted ? (
        <>
          <InfoAlert message="Masukkan email yang terdaftar. Kami akan mengirimkan instruksi untuk mengatur ulang password Anda." />

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoMdMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Kirim Instruksi Reset
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Email Terkirim</h2>
          <p className="text-gray-600 mb-6">
            Instruksi untuk mengatur ulang password telah dikirim ke email Anda. Silakan periksa kotak masuk Anda.
          </p>
        </div>
      )}

      <div className="mt-6">
        <Link
          href="/admin/login"
          className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FaArrowLeft className="h-4 w-4 mr-1" />
          <span>Kembali ke halaman login</span>
        </Link>
      </div>
    </div>
  )
}