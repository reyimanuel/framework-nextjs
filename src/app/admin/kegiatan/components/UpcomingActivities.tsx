import { MdCalendarToday, MdLocationOn, MdPeople } from "react-icons/md"

interface Activity {
  id: number
  name: string
  date: string
  location: string
  category: string
  participants?: number
}

interface UpcomingActivitiesProps {
  activities: Activity[]
}

export default function UpcomingActivities({ activities }: UpcomingActivitiesProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium">Kegiatan Mendatang</h2>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
          Lihat Semua
        </a>
      </div>
      <div className="divide-y divide-gray-700">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-gray-700/50 transition-colors">
              <h3 className="font-medium text-white mb-2">{activity.name}</h3>
              <div className="flex flex-col gap-1 text-sm text-gray-400">
                <div className="flex items-center">
                  <MdCalendarToday className="mr-2 text-gray-500" />
                  {activity.date}
                </div>
                <div className="flex items-center">
                  <MdLocationOn className="mr-2 text-gray-500" />
                  {activity.location}
                </div>
                {activity.participants !== undefined && (
                  <div className="flex items-center">
                    <MdPeople className="mr-2 text-gray-500" />
                    {activity.participants} peserta
                  </div>
                )}
              </div>
              <div className="mt-3">
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300">{activity.category}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-400">Tidak ada kegiatan mendatang.</div>
        )}
      </div>
    </div>
  )
}
