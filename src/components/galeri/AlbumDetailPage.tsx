import Image from "next/image"
import Breadcrumb from "@/components/shared/Breadcrumb"
import type { Album } from "@/components/types/album"
import EventPagination from "@/components/shared/Pagination"

type AlbumDetailPageProps = {
  album: Album
}

export default function AlbumDetailPage({ album }: AlbumDetailPageProps) {
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
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Galeri", href: "/galeri" },
              { label: album.title, href: `/galeri/album/${album.id}`, active: true },
            ]}
          />
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Foto {album.title}</h2>
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
          <EventPagination totalPages={Math.ceil(album.photos.length / 12)} currentPage={1} />
        </div>
      </section>
    </main>
  )
}
