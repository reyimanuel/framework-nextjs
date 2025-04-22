import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { FaArrowLeft } from "react-icons/fa";
import { BsCalendarDate, BsCalendarDateFill, BsClockFill, BsGeoAltFill, BsPerson } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

type Props = {
  params: { id: string }
}

export function generateMetadata({ params }: Props): Metadata {
  // This would typically fetch data based on the ID
  return {
    title: `Detail Kegiatan - Himpunan Mahasiswa Elektro UNSRAT`,
    description: "Detail kegiatan Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
  }
}

export default function EventDetailPage({ params }: Props) {
  // In a real application, you would fetch the event details based on the ID
  // For now, we'll use a mock event
  const event = {
    id: params.id,
    title: "Sharing Internship & Expo Beasiswa",
    date: "29 Juli 2024",
    time: "17:00 WITA",
    location: "Zoom Meeting",
    category: "Webinar",
    categoryColor: "blue",
    image: "/kegiatan/webinar.png",
    description: `Kegiatan webinar "Sharing Internship & Expo Beasiswa" merupakan acara yang diselenggarakan oleh Himpunan Mahasiswa Elektro (HME) Fakultas Teknik UNSRAT. Acara ini bertujuan untuk memberikan informasi dan wawasan kepada mahasiswa mengenai peluang internship dan beasiswa yang tersedia di dalam dan luar negeri.

    Dalam acara ini, peserta akan mendapatkan kesempatan untuk mendengarkan pengalaman langsung dari mahasiswa yang telah berhasil mendapatkan internship dan beasiswa, serta tips dan trik dalam proses pendaftaran. Selain itu, akan ada sesi tanya jawab untuk menjawab pertanyaan peserta mengenai internship dan beasiswa.`,
    topics: [
      "Informasi tentang peluang internship dan beasiswa",
      "Proses pendaftaran dan tips dalam mendapatkan internship dan beasiswa",
      "Pengalaman langsung dari mahasiswa yang telah berhasil mendapatkan internship dan beasiswa",
      "Q&A sesi untuk menjawab pertanyaan peserta",
    ],
    speakers: [
      {
        name: "Marfo Kapoh",
        role: "Programmer (Flutter Engineer) di PT. Aplikasi UNIQ Indonesia DIY",
        image: "/kegiatan/marfo.jpg",
      },
      {
        name: "Diendels Saryono",
        role: "Penerima Beasiswa Karya Salemba Empat",
        image: "/kegiatan/diendels.png",
      },
    ],
    organizer: "Himpunan Mahasiswa Elektro FT UNSRAT",
    relatedEvents: [
      {
        id: 1,
        title: "Sharing Internship & Expo Beasiswa",
        date: "15 Maret 2025",
        category: "Webinar",
        categoryColor: "blue",
        image: "/kegiatan/talkshow.jpg",
        description: "Webinar yang mendiskusi mengenai internship serta beasiswa yang berguna untuk mahasiswa.",
      },
      {
        id: 2,
        title: "Study Club Basic Programming",
        date: "19 Juni 2024",
        category: "Study Club",
        categoryColor: "red",
        image: "/kegiatan/studyClub.png",
        description: "Membantu mahasiswa memahami dasar-dasar pemrograman dan menjadi kesempatan untuk berbagi ilmu.",
      },
      {
        id: 3,
        title: "Elektro Berdiskusi",
        date: "28 Oktober 2022",
        category: "Internal",
        categoryColor: "blue",
        image: "/kegiatan/muswil.jpg",
        description: "Kegiatan berdiskusi mengenai internal organisasi HME FT UNSRAT",
      },
    ],
  }

  return (
    <main>
      {/* Back Button */}
      <Link
        href="/kegiatan"
        className="fixed top-20 left-4 z-50 w-10 h-10 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center shadow-md transition-colors"
        aria-label="Kembali ke halaman sebelumnya"
      >
        <FaArrowLeft size={20} />
      </Link>

      {/* Event Header */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image
              sizes="(min-width: 768px) 33vw, 100vw"
              src={event.image || "/placeholder.svg"}
              alt={`Background ${event.title}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gray bg-opacity-80"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white py-8">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${event.categoryColor === "red" ? "bg-red-600" : "bg-blue-600"
                }`}
            >
              {event.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{event.title}</h1>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <i className="bi bi-calendar-event mr-2"></i>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <i className="bi bi-geo-alt mr-2"></i>
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md mb-8">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Deskripsi Kegiatan</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">{event.description}</p>
                    <p className="mb-2">Beberapa topik yang akan dibahas dalam webinar ini antara lain:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      {event.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md mb-8">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Pembicara</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                            <Image
                              sizes="(min-width: 768px) 33vw, 100vw"
                              src={speaker.image || "/placeholder.svg"}
                              alt={`Foto ${speaker.name}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{speaker.name}</h3>
                          <p className="text-gray-600 text-sm">{speaker.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md mb-8 sticky top-24">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informasi Kegiatan</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start py-3 border-b border-gray-100">
                      <div className="text-blue-600 mr-3">
                        <BsCalendarDateFill className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Tanggal</p>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                    </li>
                    <li className="flex items-start py-3 border-b border-gray-100">
                      <div className="text-blue-600 mr-3">
                        <BsClockFill className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Waktu</p>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </li>
                    <li className="flex items-start py-3 border-b border-gray-100">
                      <div className="text-blue-600 mr-3">
                        <BsGeoAltFill className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Lokasi</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </li>
                    <li className="flex items-start py-3">
                      <div className="text-blue-600 mr-3">
                        <IoPersonSharp className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Penyelenggara</p>
                        <p className="text-gray-600">{event.organizer}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
            Kegiatan Terkait
            <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.relatedEvents.map((relatedEvent) => (
              <div
                key={relatedEvent.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={relatedEvent.image || "/placeholder.svg"}
                    alt={relatedEvent.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${relatedEvent.categoryColor === "red" ? "bg-red-600" : "bg-blue-600"
                        }`}
                    >
                      {relatedEvent.category}
                    </span>
                    <span className="text-sm text-gray-500">{relatedEvent.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{relatedEvent.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedEvent.description}</p>
                  <Link
                    href={`/kegiatan/detail/${relatedEvent.id}`}
                    className={`inline-block px-4 py-2 rounded-md text-sm font-medium border transition-colors ${relatedEvent.categoryColor === "red"
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
        </div>
      </section>
    </main>
  )
}
