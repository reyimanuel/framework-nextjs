import Image from "next/image"
import Link from "next/link"

export default function UpcomingEventsSection() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Electrical Turnamen dan Artshow",
      date: "19-23 Juni 2023",
      location: "Auditorium Fakultas Teknik UNSRAT",
      category: "Kompetisi",
      categoryColor: "red",
      image: "/kegiatan/electricalTourArt.jpg",
      description:
        "Kompetisi tahunan bidang teknik elektro tingkat nasional dengan berbagai kategori lomba termasuk desain PCB, pemrograman mikrokontroler, dan inovasi teknologi.",
    },
    {
      id: 2,
      title: "Pendaftaran Mini Soccer",
      date: "16 Februari 2025",
      location: "Laboratorium Komputer Teknik Elektro",
      category: "Fun Sport",
      categoryColor: "blue",
      image: "/kegiatan/pendaftaranSoccer.jpg",
      description: "Ayo gabung bersama dalam kegiatan Mini Soccer dalam membangun kebersamaan dan solidaritas.",
    },
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Kegiatan Mendatang
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />

                </div>
                <div className="md:w-3/5 p-5 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${event.categoryColor === "red" ? "bg-red-600" : "bg-blue-600"
                        }`}
                    >
                      {event.category}
                    </span>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                  <div className="mt-auto">
                    <div className="flex items-center mb-3">
                      <i
                        className={`bi bi-geo-alt-fill ${event.categoryColor === "red" ? "text-red-600" : "text-blue-600"
                          } mr-2`}
                      ></i>
                      <span className="text-sm text-gray-700">{event.location}</span>
                    </div>
                    <Link
                      href="#daftar"
                      className={`inline-block px-4 py-2 rounded-md text-sm font-medium text-white ${event.categoryColor === "red" ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
                        } transition-colors`}
                    >
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
