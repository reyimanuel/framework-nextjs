import React from "react";
import Image from "next/image";

export default function GalleryPreview() {
    // Sample gallery items
    const galleryItems = [
        {
            id: 1,
            image: "/kegiatan/funsport.jpg",
            title: "Fun Sport"
        },
        {
            id: 2,
            image: "/kegiatan/workshopproposal.jpg",
            title: "Workshop"
        },
        {
            id: 3,
            image: "/kegiatan/webinarstupen.jpg",
            title: "Webinar"
        },
        {
            id: 4,
            image: "/kegiatan/talkshow.jpg",
            title: "Talkshow"
        },
        {
            id: 5,
            image: "/kegiatan/muswil.jpg",
            title: "Musyawarah Wilayah"
        },
    ];

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h2 className="text-lg font-medium">Galeri Terbaru</h2>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                    Lihat Semua
                </a>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="relative overflow-hidden rounded-lg group">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={300}
                                height={200}
                                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="text-white text-xs p-2">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}