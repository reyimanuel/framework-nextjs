import Image from "next/image"
import Link from "next/link"

export default function CommunityServiceSection() {
  const communityServiceEvents = [
    {
      id: 1,
      title: "PPK Ormawa HME FT UNSRAT",
      date: "16 Juni 2024",
      category: "Pengabdian",
      categoryColor: "red",
      image: "/kegiatan/ppkOrmawa.jpg",
      description: "Program Pengabdian Masyarakat PPK Ormawa dari tim HME FT UNSRAT.",
    },
    {
      id: 2,
      title: "Pengabdian Masyarakat di Desa Pulisan FKHMI",
      date: "30 Maret 2022",
      category: "Pengabdian",
      categoryColor: "blue",
      image: "/kegiatan/pengabdianfkhmi.jpg",
      description:
        "Kegiatan ini merupakan program dari HME FT UNSRAT yang menjdu tuan rumah muswil FKHMEI wilayah 16 dan bersinergi dengan DEM sulut. FKHMEI melakukan penyerahan dan pemasangan PLTS di Desa Pulisan",
    },
  ]

  return (
    <section id="pengabdian" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Pengabdian Masyarakat
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {communityServiceEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />

                </div>
                <div className="md:w-3/5 p-5">
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
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/kegiatan/pengabdian"
            className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors shadow-md"
          >
            Lihat Semua Kegiatan Pengabdian
          </Link>
        </div>
      </div>
    </section>
  )
}
