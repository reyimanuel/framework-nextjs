"use client"
import { ReactNode } from "react"
import Sidebar from "@/app/admin/dashboard/components/Sidebar"
import Header from "@/app/admin/dashboard/components/Header"
import { SidebarProvider, useSidebar  } from "@/app/admin/dashboard/components/SidebarContext"

function ResponsiveContent({ children }: { children: ReactNode }) {
  const { collapsed } = useSidebar()
  
  return (
    <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${collapsed ? "md:ml-20" : "md:ml-64"}`}>
      <Header />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  )
}

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <ResponsiveContent>{children}</ResponsiveContent>
      </div>
    </SidebarProvider>
  )
}