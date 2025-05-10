import Image from "next/image"
import Link from "next/link"

export default function CompetitionEventsSection() {
  const competitionEvents = [
    {
      id: 1,
      title: "Lomba Futsal",
      date: "19-23 Juni 2023",
      category: "Tournament",
      categoryColor: "blue",
      image: "/kegiatan/lombaFutsal.jpg",
      description:
        "Lomba yang diadakan untuk membangun kebersamaan yang diselenggarakan oleh panitia Electrical Tournament and Artshow.",
    },
    {
      id: 2,
      title: "Lomba Basket",
      date: "19-23 Juni 2023",
      category: "Tournament",
      categoryColor: "red",
      image: "/kegiatan/lombaBasket.jpg",
      description: "Lomba Basket yang diadakan oleh panitian Electrical Tournament and Artshow.",
    },
    {
      id: 3,
      title: "Lomba Karya Tulis",
      date: "19-23 Juni 2023",
      category: "Contest",
      categoryColor: "blue",
      image: "/kegiatan/karyaTulis.jpg",
      description: "Lomba Karya Tulis yang diadakan oleh panitia Electrical Tournament and Artshow.",
    },
  ]

  return (
    <section id="kompetisi" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Kompetisi
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitionEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
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
                  Detail Kompetisi
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/kegiatan/kompetisi"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
          >
            Lihat Semua Kompetisi
          </Link>
        </div>
      </div>
    </section>
  )
}
