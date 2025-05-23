import type React from "react"
import "../globals.css"
import { Toaster } from "react-hot-toast"

export default function AdminLayout({ children, }: { children: React.ReactNode }) {
  return <>
    <Toaster
      position="top-center" // Pusat atas layar
      toastOptions={{
        style: {
          background: "#1f2937", // Warna abu-abu gelap (seperti Tailwind bg-gray-800)
          color: "#fff",          // Teks putih
          borderRadius: "8px",
          padding: "12px 16px",
        },
        success: {
          iconTheme: {
            primary: "#10b981", // Hijau (Tailwind green-500)
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444", // Merah (Tailwind red-500)
            secondary: "#fff",
          },
        },
      }}
    />
    {children}
  </>
}
