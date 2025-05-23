"use client"
import { useState } from "react"
import { MdMoreVert } from "react-icons/md"

export default function MembersList() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

  const members = [
    {
      id: 1,
      name: "Neoville Tajujung",
      role: "Ketua HME",
    },
    {
      id: 2,
      name: "Julio Roring",
      role: "Wakil Ketua",
    },
    {
      id: 3,
      name: "Sydney Pesiwarissa",
      role: "Sekretaris",
    },
    {
      id: 4,
      name: "Diendels Saryono",
      role: "Wakil Sekretaris",
    },
    {
      id: 5,
      name: "Micha Wungow",
      role: "Bendahara",
    },
    {
      id: 6,
      name: "Yuan Mantiri",
      role: "Wakil Bendahara",
    },
  ]

  const toggleDropdown = (id: number) => {
    if (activeDropdown === id) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(id)
    }
  }

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium">Pengurus</h2>
        <a href="/pengurus" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
          Lihat Semua
        </a>
      </div>
      <div className="divide-y divide-gray-700">
        {members.map((member) => (
          <div key={member.id} className="p-4 hover:bg-gray-700/50 transition-colors">
            <div className="flex items-center">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{member.name}</p>
                <p className="text-xs text-gray-400 truncate">{member.role}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(member.id)}
                  className="p-1 rounded-full hover:bg-gray-600 text-gray-400 hover:text-white transition-colors"
                >
                  <MdMoreVert className="h-5 w-5" />
                </button>

                {activeDropdown === member.id && (
                  <div className="absolute right-0 mt-1 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-700">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                      View Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                      Edit Member
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-700">
                      Remove
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700 bg-gray-800/50">
        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
          + Add New Member
        </button>
      </div>
    </div>
  )
}
