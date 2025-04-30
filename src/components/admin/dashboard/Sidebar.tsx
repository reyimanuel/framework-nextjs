import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  MdDashboard, 
  MdPeople, 
  MdEvent, 
  MdPhoto, 
  MdLogout 
} from "react-icons/md";

export default function Sidebar() {
  const pathname = usePathname();
  
  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: MdDashboard },
    { name: "Manajemen Pengurus", href: "/admin/pengurus", icon: MdPeople },
    { name: "Manajemen Kegiatan", href: "/admin/kegiatan", icon: MdEvent },
    { name: "Manajemen Galeri", href: "/admin/galeri", icon: MdPhoto },
  ];

  return (
    <div className="hidden md:flex md:flex-col md:fixed md:w-64 md:h-full bg-gradient-to-b from-blue-800 to-indigo-900">
      <div className="flex items-center justify-center h-20 bg-gradient-to-r from-blue-700 via-indigo-800 to-red-700 p-4">
        <div className="flex items-center space-x-3">
          <Image src="/logo/HME.png" alt="HME Logo" width={40} height={40} className="rounded-full bg-white p-1" />
          <div>
            <h1 className="text-lg font-bold">HME UNSRAT</h1>
            <p className="text-xs opacity-75">Admin Dashboard</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-indigo-700 text-white"
                    : "text-gray-300 hover:bg-indigo-800 hover:text-white"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4">
          <button className="flex items-center px-4 py-3 w-full text-gray-300 hover:bg-red-700 hover:text-white rounded-md text-sm transition-colors">
            <MdLogout className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}