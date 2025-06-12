"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // 1. Impor useRouter
import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
import { useSidebar } from "@/app/admin/dashboard/components/SidebarContext";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const { collapsed } = useSidebar();
  const router = useRouter(); // 2. Inisialisasi router

  // 3. Buat fungsi handleLogout
  const handleLogout = () => {
    // Hapus cookie access_token
    document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Redirect ke halaman login menggunakan replace
    router.replace("/admin/auth/login");
  };

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
          <h1 className={`ml-2 md:ml-0 text-xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent transition-all duration-300 ${collapsed ? "md:ml-16" : ""}`}>
            Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 rounded-full p-1 pr-3 transition-colors"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <span className="text-sm font-medium hidden sm:block">Admin</span>
              <MdKeyboardArrowDown
                className={`transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-700">
                <div className="border-t border-gray-700 my-1"></div>
                {/* 4. Ganti <a> dengan <button> dan panggil handleLogout */}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}