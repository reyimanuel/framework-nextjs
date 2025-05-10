import Image from "next/image"
import Link from "next/link"

export default function OrganizationalEventsSection() {
  const organizationalEvents = [
    {
      id: 1,
      title: "Musyawarah Wilayah FKHMI",
      date: "18 Juli 2024",
      category: "Eksternal",
      categoryColor: "blue",
      image: "/kegiatan/muswil.jpg",
      description: "Musyawarah wilayah IV FKHMI di Universitas Halu Oleo Kendari",
    },
    {
      id: 2,
      title: "Ibadah Anggota Kristen dan Katolik",
      date: "23 Februari 2023",
      category: "Internal",
      categoryColor: "red",
      image: "/kegiatan/ibadah.jpg",
      description: "Kegiatan ibadah anggota Kristen dan Katolik HME FT UNSRAT",
    },
    {
      id: 3,
      title: "Elektro Berdiskusi",
      date: "28 Oktober 2022",
      category: "Internal",
      categoryColor: "blue",
      image: "/kegiatan/elektroBerdiskusi.jpg",
      description: "Kegiatan berdiskusi mengenai internal organisasi HME FT UNSRAT",
    },
  ]

  return (
    <section id="keorganisasian" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Kegiatan Keorganisasian
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationalEvents.map((event) => (
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
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
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
            href="/kegiatan/keorganisasian"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
          >
            Lihat Semua Kegiatan Keorganisasian
          </Link>
        </div>
      </div>
    </section>
  )
}
