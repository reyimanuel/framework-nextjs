import Image from "next/image"
import Link from "next/link"
import type { Event } from "@/components/types/event"

type EventListProps = {
  events: Event[]
  emptyMessage?: string
}

export default function EventList({
  events,
  emptyMessage = "Tidak ada kegiatan yang tersedia saat ini.",
}: EventListProps) {
  if (events.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <i className="bi bi-calendar-x text-gray-400 text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Tidak Ada Kegiatan</h3>
          <p className="text-gray-600">{emptyMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
            sizes="(min-width: 768px) 33vw, 100vw" 
            src={event.image || "/placeholder.svg"} 
            alt={event.title} 
            fill 
            className="object-cover" />
          </div>
          <div className="p-5">
            <div className="flex justify-between items-center mb-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                  event.categoryColor === "red" ? "bg-red-600" : "bg-blue-600"
                }`}
              >
                {event.category}
              </span>
              <span className="text-sm text-gray-500">{event.date}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{event.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
            <Link
              href={`/kegiatan/detail/${event.id}`}
              className={`inline-block px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                event.categoryColor === "red"
                  ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Detail Kegiatan
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
