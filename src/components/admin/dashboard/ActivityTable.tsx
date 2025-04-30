import React from "react";
import { MdVisibility, MdEdit, MdDelete } from "react-icons/md";

export default function ActivityTable() {
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
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-600";
      case "Draft":
        return "bg-yellow-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium">Kegiatan Terbaru</h2>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
          Lihat Semua
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Nama Kegiatan
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Kategori
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {activity.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {activity.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {activity.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(activity.status)} text-white`}>
                    {activity.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-blue-400">
                      <MdVisibility className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-yellow-400">
                      <MdEdit className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-red-400">
                      <MdDelete className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}