"use client"
import { useState } from "react"
import DashboardLayout from "@/app/admin/dashboard/components/Layout"
import EventTable from "@/app/admin/kegiatan/components/EventTable"
import EventStats from "@/app/admin/kegiatan/components/StatusStats"
import AddEventForm from "@/app/admin/kegiatan/components/AddEventForm"
import { MdAdd } from "react-icons/md"

export interface EventFormData {
  name: string
  date: string
  category: string
  location: string
  description: string
  status: string
}

export default function KegiatanPage() {
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(false)

  const handleRefresh = () => {
    setRefreshTrigger((prev) => !prev)
  }


  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Manajemen Kegiatan</h1>
            <p className="text-gray-400">Kelola kegiatan dan acara HME UNSRAT</p>
          </div>
          <button
            onClick={() => setIsAddEventOpen(true)}
            className="mt-4 sm:mt-0 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <MdAdd className="mr-1" /> Tambah Kegiatan
          </button>
        </div>

        <EventStats />
      </div>

      <div className="mb-8">
        <div className="lg:col-span-2">
          <EventTable refreshTrigger={refreshTrigger} onRefresh={handleRefresh} />
        </div>
      </div>

      <AddEventForm
        isOpen={isAddEventOpen}
        onClose={() => setIsAddEventOpen(false)}
        onSuccess={() => {
          setIsAddEventOpen(false);
          handleRefresh();
        }}
      />

    </DashboardLayout>
  )
}
