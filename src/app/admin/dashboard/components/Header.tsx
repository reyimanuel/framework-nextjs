"use client"
import { useState } from "react"
import { MdMenu, MdNotifications, MdSearch, MdKeyboardArrowDown } from "react-icons/md"
import Image from "next/image"
import { useSidebar } from "@/app/admin/dashboard/components/SidebarContext"

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)
  // Get sidebar collapsed state from context
  const { collapsed } = useSidebar()

  return (
    <header className="bg-gray-800 shadow-lg border-b border-gray-700">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-label="Open sidebar"
          >
            <MdMenu className="h-6 w-6" />
          </button>
          {/* Add the dynamic margin to the h1 element based on sidebar state */}
          <h1 className={`ml-2 md:ml-0 text-xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent transition-all duration-300 ${collapsed ? "md:ml-16" : ""}`}>
            Dashboard
          </h1>
        </div>

        <div className="hidden md:flex items-center bg-gray-700/50 rounded-lg px-3 py-1.5 flex-1 max-w-md mx-4">
          <MdSearch className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none text-gray-200 placeholder-gray-400 w-full"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors relative">
            <MdNotifications className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative">
            <button
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 rounded-full p-1 pr-3 transition-colors"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Admin"
                width={32}
                height={32}
                className="rounded-full border-2 border-blue-500"
              />
              <span className="text-sm font-medium hidden sm:block">Admin</span>
              <MdKeyboardArrowDown
                className={`transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-700">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Your Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Settings
                </a>
                <div className="border-t border-gray-700 my-1"></div>
                <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-700">
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}