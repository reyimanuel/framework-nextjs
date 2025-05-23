import { fetchAllMembers } from "@/app/service/api"
import { useEffect, useState, useMemo } from "react"
import { MdPeople } from "react-icons/md"

export interface Member {
  id: number
  name: string
  role: string
  division: string
  year: string
  status: "Active" | "Inactive" | "Alumni"
}

interface Division {
  name: string
  count: number
  color: string
}

export default function DivisionStats() {
  const [stats, setStats] = useState<Division[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const colorMap = useMemo<Record<string, string>>(() => ({
    "Non Bidang": "from-blue-900 to-blue-700",
    "Keilmuwan & Penalaran": "from-green-900 to-green-700",
    "Minat & Bakat": "from-purple-900 to-purple-700",
    "Kesejahteraan Mahasiswa": "from-red-900 to-red-700",
    "Umum & Sarana Prasarana": "from-yellow-900 to-yellow-700",
    "Bursa & Pendanaan": "from-gray-900 to-gray-700",
    "Kerohanian": "from-pink-900 to-pink-700",
    "Humas & Kemitraan": "from-orange-900 to-orange-700",
  }), [])

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true)
      setError(null)
      try {
        const data: Member[] = await fetchAllMembers()

        // Hitung jumlah per divisi dengan status "Active"
        const countMap: Record<string, number> = {}
        for (const member of data) {
          if (member.status === "Active") {
            countMap[member.division] = (countMap[member.division] || 0) + 1
          }
        }

        // Ubah ke bentuk array yang siap ditampilkan
        const result: Division[] = Object.entries(countMap).map(([division, count]) => ({
          name: division,
          count,
          color: colorMap[division] || "from-gray-900 to-gray-700"
        }))

        setStats(result)
      } catch (err) {
        console.error("Gagal menghitung statistik divisi:", err)
        setError("Gagal memuat data. Silakan coba lagi.")
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [colorMap])

  if (loading) {
    return (
      <div className="text-center py-8 text-gray-300">
        <span className="animate-pulse">Memuat statistik divisi...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-400">
        {error}
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
