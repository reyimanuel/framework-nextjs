"use client"

import { MdClose, MdCalendarToday, MdLabel } from "react-icons/md"
import Image from "next/image"
import type { ViewGalleryModalProps } from "@/app/admin/galeri/components/types/gallery"

export default function ViewGalleryModal({ item, onClose }: ViewGalleryModalProps) {
    if (!item) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-4xl border border-gray-700 max-h-[90vh] overflow-hidden flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
                    <h2 className="text-lg font-medium truncate">{item.name}</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                        <MdClose className="h-5 w-5" />
                    </button>
                </div>
                <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                    <div className="md:w-2/3 relative bg-gray-700 flex items-center justify-center p-2">
                        <Image src={item.image_url} alt={item.name} width={400} height={300} className="object-cover w-full h-full" />
                    </div>
                    <div className="md:w-1/3 p-4 overflow-y-auto">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium text-white">{item.name}</h3>
                                <div className="flex items-center mt-1 text-sm text-gray-400">
                                    <MdCalendarToday className="mr-1" />{" "}
                                    {new Date(item.created_at).toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </div>
                                <div className="flex items-center mt-1">
                                    <MdLabel className="mr-1 text-gray-400" />
                                    <span className="text-sm bg-gray-700 text-gray-300 px-2 py-0.5 rounded">{item.category}</span>
                                </div>
                            </div>

                            {item.description && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-300 mb-1">Deskripsi</h4>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                </div>
                            )}

                            <div>
                                <h4 className="text-sm font-medium text-gray-300 mb-1">Informasi File</h4>
                                <div className="text-xs text-gray-400 space-y-1">
                                    <p>ID: {item.id}</p>
                                    <p>Format: JPG</p>
                                    <p>
                                        Ditambahkan pada:{" "}
                                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-gray-700 bg-gray-800/90">
                    <div className="flex justify-end space-x-3">
                        <button onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
