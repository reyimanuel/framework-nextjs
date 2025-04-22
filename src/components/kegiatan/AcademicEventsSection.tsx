import Image from "next/image"
import Link from "next/link"

export default function AcademicEventsSection() {
  const academicEvents = [
    {
      id: 1,
      title: "Tranformasi Mahasiswa Fakultas Teknik UNSRAT Menuju Indonesia Emas 2045.",
      date: "22 April 2025",
      category: "Talkshow",
      categoryColor: "red",
      image: "/kegiatan/talkshow.jpg",
      description: "Membahas peran penting mahasiswa dalam mewujudkan visi Indonesia Emas 2045.",
    },
    {
      id: 2,
      title: "Sharing Internship & Expo Beasiswa",
      date: "29 Juli 2024",
      category: "Webinar",
      categoryColor: "blue",
      image: "/kegiatan/webinar.png",
      description: "Webinar yang mendiskusi mengenai internship serta beasiswa yang berguna untuk mahasiswa.",
    },
    {
      id: 3,
      title: "Study Club Basic Programming",
      date: "19 Juni 2024",
      category: "Study Club",
      categoryColor: "red",
      image: "/kegiatan/studyClub.png",
      description: "Membantu mahasiswa memahami dasar-dasar pemrograman dan menjadi kesempatan untuk berbagi ilmu.",
    },
  ]

  return (
    <section id="akademik" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Kegiatan Akademik
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />

              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white ${event.categoryColor === "red" ? "bg-red-600" : "bg-blue-600"
                      }`}
                  >
                    {event.category}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <Link
                  href={`/kegiatan/detail/${event.id}`}
                  className={`inline-block px-4 py-2 rounded-md text-sm font-medium border transition-colors ${event.categoryColor === "red"
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
        <div className="text-center mt-8">
          <Link
            href="/kegiatan/akademik"
            className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors shadow-md"
          >
            Lihat Semua Kegiatan Akademik
          </Link>
        </div>
      </div>
    </section>
  )
}
