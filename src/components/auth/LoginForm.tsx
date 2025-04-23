"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { FaUser } from "react-icons/fa";
import PasswordInput from "@/components/auth/PasswordInput"
import InfoAlert from "@/components/auth/InfoAlert"

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt with:", formData)
    // Here you would typically handle authentication
  }

  return (
    <div className="p-6">
      <InfoAlert message="Gunakan kredensial yang diberikan oleh administrator sistem." />

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-2">
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <PasswordInput
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            required
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
              Ingat saya
            </label>
          </div>
          <Link href="/admin/forgot-password" className="text-sm text-blue-600 hover:underline">
            Lupa password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
        >
          <span className="mr-2">Login</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
          </svg>
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        Sistem ini dilindungi dan hanya untuk pengurus HME
      </div>
    </div>
  )
}
