"use client"
import { useState } from "react"
import { MdVisibility, MdEdit, MdDelete, MdFilterList, MdSearch, MdCalendarToday } from "react-icons/md"

// Define the activity type
interface Activity {
  id: number
  name: string
  date: string
  category: string
  location: string
  status: "Published" | "Draft" | "Completed" | "Cancelled"
  participants?: number
}

export default function ActivityTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState<string>("All")

  // Sample activity data
  const activities: Activity[] = [
    {
      id: 1,
      name: "Tranformasi Mahasiswa Fakultas Teknik UNSRAT Menuju Indonesia Emas 2045",
      date: "22 Apr 2025",
      category: "Talkshow",
      location: "Aula Fakultas Teknik",
      status: "Published",
      participants: 120,
    },
    {
      id: 2,
      name: "Sharing Internship & Expo Beasiswa",
      date: "15 Mar 2025",
      category: "Webinar",
      location: "Zoom Meeting",
      status: "Published",
      participants: 85,
    },
    {
      id: 3,
      name: "Study Club Basic Programming",
      date: "19 Jun 2024",
      category: "Study Club",
      location: "Lab Komputer",
      status: "Draft",
    },
    {
      id: 4,
      name: "Lomba Futsal Antar Jurusan",
      date: "19 Jun 2023",
      category: "Tournament",
      location: "Lapangan Futsal UNSRAT",
      status: "Completed",
      participants: 60,
    },
    {
      id: 5,
      name: "Lomba Karya Tulis Ilmiah",
      date: "19 Jun 2023",
      category: "Karya Tulis",
      location: "Online",
      status: "Completed",
      participants: 25,
    },
    {
      id: 6,
      name: "Workshop UI/UX Design",
      date: "05 Aug 2024",
      category: "Workshop",
      location: "Ruang Seminar",
      status: "Draft",
    },
    {
      id: 7,
      name: "Seminar Teknologi Blockchain",
      date: "12 Sep 2024",
      category: "Seminar",
      location: "Aula Fakultas Teknik",
      status: "Published",
      participants: 0,
    },
    {
      id: 8,
      name: "Pelatihan Leadership",
      date: "30 Jul 2023",
      category: "Training",
      location: "Aula Fakultas Teknik",
      status: "Cancelled",
      participants: 0,
    },
  ]

  // Filter options
  const filterOptions = ["All", "Talkshow", "Webinar", "Study Club", "Tournament", "Workshop", "Seminar"]
  
  // Get status badge class
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-600 border-green-700"
      case "Draft":
        return "bg-yellow-600 border-yellow-700"
      case "Completed":
        return "bg-blue-600 border-blue-700"
      case "Cancelled":
        return "bg-red-600 border-red-700"
      default:
        return "bg-gray-600 border-gray-700"
    }
  }

  // Filter activities based on search term and selected filter
  const filteredActivities = activities.filter(
    (activity) =>
      (activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedFilter === "All" || activity.category === selectedFilter),
  )

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium mb-2 sm:mb-0">Daftar Kegiatan</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari kegiatan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-700 text-white text-sm rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <MdSearch className="absolute left-2.5 top-2.5 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
              <MdFilterList className="text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700/50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Nama Kegiatan
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Tanggal
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Kategori
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Lokasi
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-white">{activity.name}</div>
                    {activity.participants !== undefined && (
                      <div className="text-xs text-gray-400 mt-1">
                        {activity.participants} {activity.participants === 1 ? "peserta" : "peserta"}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-300">
                      <MdCalendarToday className="mr-1.5 text-gray-400" />
                      {activity.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300">{activity.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{activity.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusBadgeClass(
                        activity.status,
                      )} text-white`}
                    >
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <div className="flex space-x-3">
                      <button className="text-gray-400 hover:text-blue-400 transition-colors">
                        <MdVisibility className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                        <MdEdit className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-red-400 transition-colors">
                        <MdDelete className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-400">
                  Tidak ada kegiatan yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700">
        <div className="text-sm text-gray-400 mb-2 sm:mb-0">
          Menampilkan <span className="font-medium">{filteredActivities.length}</span> dari{" "}
          <span className="font-medium">{activities.length}</span> kegiatan
        </div>
        <div className="flex space-x-1">
          <button className="px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">1</button>
          <button className="px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
