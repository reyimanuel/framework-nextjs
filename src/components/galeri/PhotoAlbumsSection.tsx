import Image from "next/image"
import Link from "next/link"

export default function PhotoAlbumsSection() {
  const albums = [
    {
      id: "lomba",
      title: "Lomba HME",
      photoCount: 36,
      coverImage: "/gallery/kompetisiAlbum.jpg",
    },
    {
      id: "workshop",
      title: "Workshop & Seminar",
      photoCount: 18,
      coverImage: "/gallery/workshopSeminarAlbum.jpg",
    },
    {
      id: "pengabdian",
      title: "Pengabdian Masyarakat",
      photoCount: 12,
      coverImage: "/gallery/ppkOrmawa.jpg",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Album Foto
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={album.coverImage || "/placeholder.svg"}
                  alt={`Album ${album.title}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{album.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{album.photoCount} Foto</p>
                <Link
                  href={`/galeri/album/${album.id}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Lihat Album
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
