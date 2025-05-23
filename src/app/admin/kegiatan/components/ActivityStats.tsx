import { MdEvent, MdPeople, MdCheckCircle, MdAccessTime } from "react-icons/md"

interface ActivityStatsProps {
  stats: {
    total: number
    upcoming: number
    completed: number
    participants: number
  }
}

export default function ActivityStats({ stats }: ActivityStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-300">Total Kegiatan</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.total}</p>
          </div>
          <div className="p-3 bg-black/20 rounded-full">
            <MdEvent className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-300">Kegiatan Mendatang</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.upcoming}</p>
          </div>
          <div className="p-3 bg-black/20 rounded-full">
            <MdAccessTime className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-300">Kegiatan Selesai</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.completed}</p>
          </div>
          <div className="p-3 bg-black/20 rounded-full">
            <MdCheckCircle className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-300">Total Peserta</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.participants}</p>
          </div>
          <div className="p-3 bg-black/20 rounded-full">
            <MdPeople className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
