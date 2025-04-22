import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

type Props = {
  params: { id: string }
}

export function generateMetadata({ params }: Props): Metadata {
  // This would typically fetch data based on the ID
  const albumTitle =
    params.id === "lomba"
      ? "Lomba HME"
      : params.id === "workshop"
        ? "Workshop & Seminar"
        : params.id === "pengabdian"
          ? "Pengabdian Masyarakat"
          : "Album"

  return {
    title: `${albumTitle} - Galeri HME UNSRAT`,
    description: `Galeri foto ${albumTitle.toLowerCase()} Himpunan Mahasiswa Elektro Universitas Sam Ratulangi`,
  }
}

export default async function AlbumPage({ params }: Props) {
  // In a real application, you would fetch the album details based on the ID
  // For now, we'll use mock data

  const albumData = {
    lomba: {
      title: "Album Lomba HME",
      description: "Dokumentasi kegiatan lomba dan kompetisi Himpunan Mahasiswa Elektro UNSRAT",
      photos: [
        {
          id: 1,
          title: "Mini Soccer",
          date: "28 Februari 2025",
          image: "/kegiatan/miniSoccer.jpg",
        },
        {
          id: 2,
          title: "Lomba Mobile Legends",
          date: "15 April 2023",
          image: "/kegiatan/lombaML.jpg",
        },
        {
          id: 3,
          title: "Lomba Basket Putri",
          date: "15 April 2023",
          image: "/kegiatan/lombabasketputri.jpg",
        },
        {
          id: 4,
          title: "Lomba Voli Putra",
          date: "15 April 2023",
          image: "/kegiatan/lombavoliputra.jpg",
        },
        {
          id: 5,
          title: "Lomba Voli Putri",
          date: "15 April 2023",
          image: "/kegiatan/voli putri.jpg",
        },
        {
          id: 6,
          title: "Lomba Futsal",
          date: "19-23 Juni 2023",
          image: "/kegiatan/lombaFutsal.jpg",
        },
        {
          id: 7,
          title: "Lomba Basket",
          date: "19-23 Juni 2023",
          image: "/kegiatan/lombaBasket.jpg",
        },
        {
          id: 8,
          title: "Lomba Karya Tulis",
          date: "19-23 Juni 2023",
          image: "/kegiatan/karyaTulis.jpg",
        },
      ],
    },
    workshop: {
      title: "Album Workshop & Seminar",
      description: "Dokumentasi kegiatan workshop dan seminar Himpunan Mahasiswa Elektro UNSRAT",
      photos: [
        {
          id: 1,
          title: "Workshop Pemrograman",
          date: "15 Mei 2024",
          image: "/kegiatan/studyClub.png",
        },
        {
          id: 2,
          title: "Seminar Teknologi",
          date: "20 Juni 2024",
          image: "/kegiatan/webinar.jpg",
        },
        {
          id: 3,
          title: "Workshop & Pelatihan",
          date: "10 Maret 2024",
          image: "/gallery/workshop.png",
        },
      ],
    },
    pengabdian: {
      title: "Album Pengabdian Masyarakat",
      description: "Dokumentasi kegiatan pengabdian masyarakat Himpunan Mahasiswa Elektro UNSRAT",
      photos: [
        {
          id: 1,
          title: "PPK Ormawa HME FT UNSRAT",
          date: "16 Juni 2024",
          image: "/kegiatan/ppkOrmawa.jpg",
        },
        {
          id: 2,
          title: "Pengabdian Masyarakat di Desa Pulisan",
          date: "30 Maret 2022",
          image: "/kegiatan/pengabdianfkhmi.jpg",
        },
      ],
    },
  }

  const album = albumData[params.id as keyof typeof albumData] || {
    title: "Album",
    description: "Galeri foto Himpunan Mahasiswa Elektro UNSRAT",
    photos: [],
  }

  return (
    <main>
      {/* Hero Section */}
      <header className="bg-blue-800 text-white py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{album.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">{album.description}</p>
        </div>
        {/* Wave shape at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="py-3 bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Beranda
                </Link>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link href="/galeri" className="ml-1 text-gray-600 hover:text-blue-600 transition-colors">
                  Galeri
                </Link>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-gray-800 font-medium" aria-current="page">
                  {album.title}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Foto {album.title}</h2>
            <Link
              href="/galeri"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Kembali ke Galeri
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {album.photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={photo.image || "/placeholder.svg"}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{photo.title}</h3>
                  <p className="text-gray-500 text-sm">{photo.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav className="mt-10 flex justify-center" aria-label="Pagination">
            <ul className="inline-flex items-center -space-x-px">
              {/* Previous */}
              <li>
                <a
                  href="#"
                  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M12.707 14.707a1 1 0 01-1.414 0L7.293 10l4-4a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              {/* Page Numbers */}
              {[1, 2, 3, 4].map((page, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`px-3 py-2 leading-tight border ${page === 1
                        ? "bg-blue-600 text-white font-medium border-blue-600"
                        : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50"
                      }`}
                    aria-current={page === 1 ? "page" : undefined}
                  >
                    {page}
                  </a>
                </li>
              ))}

              {/* Next */}
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Next"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>


        </div>
      </section>
    </main>
  )
}
