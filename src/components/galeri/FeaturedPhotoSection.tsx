import Image from "next/image"

export default function FeaturedPhotosSection() {
  const featuredPhotos = [
    {
      id: 1,
      title: "Electrical Tournament and Artshow",
      category: "Kompetisi",
      image: "/kegiatan/electricalTourArt.jpg",
    },
    {
      id: 2,
      title: "Workshop Pemrograman",
      category: "Workshop",
      image: "/kegiatan/studyClub.png",
    },
    {
      id: 3,
      title: "Pengabdian Masyarakat",
      category: "Pengabdian",
      image: "/kegiatan/ppkOrmawa.jpg",
    },
    {
      id: 4,
      title: "Musyawarah Wilayah FKHMI",
      category: "Organisasi",
      image: "/kegiatan/muswil.jpg",
    },
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Foto Pilihan
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-medium bg-blue-600 px-2 py-1 rounded-full mb-2 inline-block">
                    {photo.category}
                  </span>
                  <h3 className="font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
