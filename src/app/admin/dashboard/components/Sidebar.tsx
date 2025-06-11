"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdDashboard, MdPeople, MdEvent, MdPhoto, MdKeyboardArrowLeft, MdHelp } from "react-icons/md";
import { useSidebar } from "@/app/admin/dashboard/components/SidebarContext";

export default function Sidebar() {
  const pathname = usePathname();
  // Replace the local state with the context
  const { collapsed, setCollapsed } = useSidebar();

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: MdDashboard },
    { name: "Manajemen Pengurus", href: "/admin/pengurus", icon: MdPeople },
    { name: "Manajemen Kegiatan", href: "/admin/kegiatan", icon: MdEvent },
    { name: "Manajemen Galeri", href: "/admin/galeri", icon: MdPhoto },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20 hidden"></div>

      <div className={`${collapsed ? "md:w-20" : "md:w-64"} hidden md:flex md:flex-col fixed h-full bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 transition-all duration-300 z-30`}>
        <div className="flex items-center justify-between h-16 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 px-4">
          <div className="flex items-center space-x-3">
            <Image src="/logo/HME.png" alt="HME Logo" width={40} height={40} className="rounded-full bg-white p-1 border-2 border-blue-400" />
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold">HME UNSRAT</h1>
                <p className="text-xs opacity-75">Admin Dashboard</p>
              </div>
            )}
          </div>
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-gray-700/50">
            <MdKeyboardArrowLeft className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Rest of your sidebar component remains unchanged */}
        <div className="flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} className={`flex items-center px-4 py-3 rounded-lg text-sm transition-all duration-200 group ${isActive ? "bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-md" : "text-gray-300 hover:bg-gray-800/50 hover:text-white"}`}>
                  <item.icon className={`${collapsed ? "mr-0" : "mr-3"} h-5 w-5 transition-all duration-200 ${isActive ? "text-blue-300" : "group-hover:text-blue-400"}`} />
                  {!collapsed && <span>{item.name}</span>}
                  {collapsed && <div className="absolute left-full ml-6 px-2 py-1 bg-gray-800 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{item.name}</div>}
                </Link>
              );
            })}
          </nav>

          <div className="p-4">
            <Link href="/admin/help" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white rounded-lg text-sm transition-colors mb-2">
              <MdHelp className={`${collapsed ? "mr-0" : "mr-3"} h-5 w-5`} />
              {!collapsed && <span>Help & Support</span>}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 z-30 transform -translate-x-full transition-transform">{/* Mobile sidebar content - same as desktop but without collapse button */}</div>
    </>
  );
}
