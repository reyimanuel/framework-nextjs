"use client"

import { useEffect, useState } from "react"
import { MdPeople } from "react-icons/md"
import { fetchAllMembers } from "@/app/service/api"
import type { Member, Division, MemberTableProps } from "./types/member"
import { toast } from "react-hot-toast"

const DIVISION_COLORS: Record<string, string> = {
  "Non Bidang": "from-blue-900 to-blue-700",
  "Keilmuwan & Penalaran": "from-green-900 to-green-700",
  "Minat & Bakat": "from-purple-900 to-purple-700",
  "Kesejahteraan Mahasiswa": "from-red-900 to-red-700",
  "Umum & Sarana Prasarana": "from-yellow-900 to-yellow-700",
  "Bursa & Pendanaan": "from-gray-900 to-gray-700",
  "Kerohanian": "from-pink-900 to-pink-700",
  "Humas & Kemitraan": "from-orange-900 to-orange-700",
}

const DEFAULT_COLOR = "from-gray-900 to-gray-700"

export default function DivisionStats({ refreshTrigger }: MemberTableProps) {
  const [stats, setStats] = useState<Division[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const calculateDivisionStats = (members: Member[]): Division[] => {
    if (!members || !Array.isArray(members)) return []

    const countMap: Record<string, number> = {}

    // Count active members by division
    members
      .filter(member => member.status === "Active")
      .forEach(member => {
        countMap[member.division] = (countMap[member.division] || 0) + 1
      })

    // Convert to Division array
    return Object.entries(countMap).map(([division, count]) => ({
      name: division,
      count,
      color: DIVISION_COLORS[division] || DEFAULT_COLOR,
    }))
  }

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true)
      setError(null)

      try {
        const members = await fetchAllMembers()
        const divisionStats = calculateDivisionStats(members)
        setStats(divisionStats)
      } catch (err) {
        console.error("Gagal menghitung statistik divisi:", err)
        toast.error("Gagal memuat data. Silakan coba lagi.")
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [refreshTrigger])

  if (loading) {
    return (
      <div className="text-center py-8 text-gray-300">
        <span className="animate-pulse">Memuat statistik divisi...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8 text-gray-300">
        {error}
      </div>
    )
  }

  if (!stats.length) {
    return (
      <div className="text-center py-8 text-gray-300">
        Tidak ada data anggota aktif yang ditemukan.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((division, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-br ${division.color} rounded-2xl shadow-md border border-gray-800 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-200">{division.name}</p>
              <p className="text-3xl font-bold text-white mt-1">{division.count}</p>
              <p className="text-xs text-gray-300">Anggota Aktif</p>
            </div>
            <div className="p-3 bg-white/10 rounded-full">
              <MdPeople className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}