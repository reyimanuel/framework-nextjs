import Image from "next/image"
import Link from "next/link"

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Pelantikan Pengurus",
      description: "Pelantikan pengurus HME UNSRAT periode 2023-2024 yang dihadiri oleh Dekan Fakultas Teknik.",
      image: "/gallery/pelantikan.png",
      date: "Maret 2024",
    },
    {
      title: "Rapat Kerja",
      description: "Rapat kerja pengurus HME UNSRAT untuk menyusun program kerja periode 2023-2024.",
      image: "/gallery/rapat.png",
      date: "Oktober 2023",
    },
    {
      title: "Workshop & Pelatihan",
      description: "Workshop dan Pelatihan dari PT.Conch serta Kunjungan dari WUHU University",
      image: "/gallery/workshop.png",
      date: "Maret 2024",
    },
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10 relative">
          Galeri Kegiatan
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image 
                sizes="(min-width: 768px) 33vw, 100vw" 
                src={item.image || "/placeholder.svg"} 
                alt={item.title} 
                fill 
                className="object-cover" />
              </div>
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/galeri"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
          >
            Lihat Semua Galeri
          </Link>
        </div>
      </div>
    </section>
  )
}
