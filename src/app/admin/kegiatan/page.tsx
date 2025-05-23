"use client"
import { useState } from "react"
import DashboardLayout from "@/app/admin/dashboard/components/Layout"
import ActivityTable from "@/app/admin/kegiatan/components/ActivityTable"
import ActivityStats from "@/app/admin/kegiatan/components/ActivityStats"
import UpcomingActivities from "@/app/admin/kegiatan/components/UpcomingActivities"
import AddActivityForm from "@/app/admin/kegiatan/components/AddActivityForm"
import { MdAdd } from "react-icons/md"

export interface ActivityFormData {
    name: string
    date: string
    category: string
    location: string
    description: string
    status: string
}

export default function KegiatanPage() {
  const [isAddActivityOpen, setIsAddActivityOpen] = useState(false)

  // Sample activity statistics
  const activityStats = {
    total: 8,
    upcoming: 3,
    completed: 2,
    participants: 290,
  }

  // Sample upcoming activities
  const upcomingActivities = [
    {
      id: 1,
      name: "Tranformasi Mahasiswa Fakultas Teknik UNSRAT Menuju Indonesia Emas 2045",
      date: "22 Apr 2025",
      location: "Aula Fakultas Teknik",
      category: "Talkshow",
      participants: 120,
    },
    {
      id: 2,
      name: "Sharing Internship & Expo Beasiswa",
      date: "15 Mar 2025",
      location: "Zoom Meeting",
      category: "Webinar",
      participants: 85,
    },
    {
      id: 7,
      name: "Seminar Teknologi Blockchain",
      date: "12 Sep 2024",
      location: "Aula Fakultas Teknik",
      category: "Seminar",
      participants: 0,
    },
  ]

  const handleAddActivity = (data: ActivityFormData) => {
    console.log("Adding new activity:", data)
    // Here you would typically send this data to your API
    // and then refresh the activity list
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
            onClick={() => setIsAddActivityOpen(true)}
            className="mt-4 sm:mt-0 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <MdAdd className="mr-1" /> Tambah Kegiatan
          </button>
        </div>

        <ActivityStats stats={activityStats} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ActivityTable />
        </div>
        <div className="lg:col-span-1">
          <UpcomingActivities activities={upcomingActivities} />
        </div>
      </div>

      <AddActivityForm
        isOpen={isAddActivityOpen}
        onClose={() => setIsAddActivityOpen(false)}
        onSubmit={handleAddActivity}
      />
    </DashboardLayout>
  )
}
