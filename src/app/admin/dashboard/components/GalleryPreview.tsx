"use client"
import { useState } from "react"
import Image from "next/image"
import { MdZoomOutMap, MdClose } from "react-icons/md"

export default function GalleryPreview() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    // Sample gallery items
    const galleryItems = [
        {
            id: 1,
            image: "/kegiatan/funsport.jpg",
            title: "Fun Sport",
        },
        {
            id: 2,
            image: "/kegiatan/workshopproposal.jpg",
            title: "Workshop",
        },
        {
            id: 3,
            image: "/kegiatan/webinarstupen.jpg",
            title: "Webinar",
        },
        {
            id: 4,
            image: "/kegiatan/talkshow.jpg",
            title: "Talkshow",
        },
        {
            id: 5,
            image: "/kegiatan/muswil.jpg",
            title: "Musyawarah Wilayah",
        },
    ]

    return (
        <>
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-lg font-medium">Galeri Terbaru</h2>
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                        Lihat Semua
                    </a>
                </div>
                <div className="p-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {galleryItems.map((item) => (
                            <div key={item.id} className="relative overflow-hidden rounded-lg group cursor-pointer">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2">
                                    <div className="self-end">
                                        <button
                                            onClick={() => setSelectedImage(item.image)}
                                            className="p-1.5 bg-gray-800/80 rounded-full text-white hover:bg-blue-600 transition-colors"
                                        >
                                            <MdZoomOutMap className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <p className="text-white text-sm font-medium">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4 border-t border-gray-700 bg-gray-800/50">
                    <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                        Upload New Image
                    </button>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
                        >
                            <MdClose className="h-8 w-8" />
                        </button>
                        <Image
                            src={selectedImage || "/placeholder.svg"}
                            alt="Gallery preview"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
