import type React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-indigo-800 to-red-700 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">{children}</div>
    </div>
  )
}
