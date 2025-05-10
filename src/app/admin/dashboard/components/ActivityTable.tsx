"use client"
import { useState } from "react"
import { MdVisibility, MdEdit, MdDelete, MdFilterList, MdSearch } from "react-icons/md"

export default function ActivityTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const activities = [
    {
      id: 1,
      name: "Tranformasi Mahasiswa Fakultas Teknik UNSRAT Menuju Indonesia Emas 2045",
      date: "22 Apr 2025",
      category: "Talkshow",
      status: "Published",
    },
    {
      id: 2,
      name: "Sharing Internship & Expo Beasiswa",
      date: "15 Mar 2025",
      category: "Webinar",
      status: "Published",
    },
    {
      id: 3,
      name: "Study Club Basic Programming",
      date: "19 Jun 2024",
      category: "Study Club",
      status: "Draft",
    },
    {
      id: 4,
      name: "Lomba Futsal",
      date: "19 Jun 2023",
      category: "Tournament",
      status: "Published",
    },
    {
      id: 5,
      name: "Lomba Karya Tulis",
      date: "19 Jun 2023",
      category: "Karya Tulis",
      status: "Published",
    },
  ]

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-600 border-green-700"
      case "Draft":
        return "bg-yellow-600 border-yellow-700"
      default:
        return "bg-gray-600 border-gray-700"
    }
  }

  const filteredActivities = activities.filter(
    (activity) =>
      activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium mb-2 sm:mb-0">Kegiatan Terbaru</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-700 text-white text-sm rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <MdSearch className="absolute left-2.5 top-2.5 text-gray-400" />
          </div>
          <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
            <MdFilterList className="text-gray-300" />
          </button>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{activity.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{activity.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300">{activity.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusBadgeClass(activity.status)} text-white`}
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
                <td colSpan={5} className="px-6 py-4 text-center text-gray-400">
                  No activities found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 flex items-center justify-between border-t border-gray-700">
        <div className="text-sm text-gray-400">
          Showing <span className="font-medium">{filteredActivities.length}</span> of{" "}
          <span className="font-medium">{activities.length}</span> activities
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
