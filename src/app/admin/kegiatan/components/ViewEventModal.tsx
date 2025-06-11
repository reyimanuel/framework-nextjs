"use client"
import { MdClose, MdEdit, MdCalendarToday, MdLocationOn, MdPerson, MdCategory, MdInfo } from "react-icons/md"
import Image from "next/image"
import { ViewEventModalProps } from "@/app/admin/kegiatan/components/types/event"

export default function ViewEventModal({ event, onClose, onEdit }: ViewEventModalProps) {
    if (!event) return null

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case "Coming Soon":
                return "bg-green-600 border-green-700";
            case "Inactive":
                return "bg-red-600 border-red-700";
            case "Active":
                return "bg-blue-600 border-blue-700";
            case "Completed":
                return "bg-purple-600 border-purple-700";
            default:
                return "bg-gray-600 border-gray-700";
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const formatTime = (timeString: string) => {
        return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const formatDateTime = (dateTimeString: string) => {
        return new Date(dateTimeString).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-4xl border border-gray-700 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
                    <h2 className="text-lg font-medium">Detail Kegiatan</h2>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => onEdit(event)}
                            className="p-1.5 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                            aria-label="Edit event"
                        >
                            <MdEdit className="h-5 w-5" />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                            aria-label="Close modal"
                        >
                            <MdClose className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Image Section */}
                        <div className="lg:col-span-1">
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-700 bg-gray-700">
                                {event.event_image_url ? (
                                    <Image
                                        src={event.event_image_url || "/placeholder.svg"}
                                        alt={event.event_name}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-48 bg-gray-700">
                                        <MdCategory className="h-16 w-16 text-gray-500" />
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 text-center">
                                <span
                                    className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full border ${getStatusBadgeClass(
                                        event.event_status,
                                    )} text-white`}
                                >
                                    {event.event_status}
                                </span>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="lg:col-span-2">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white mb-2">{event.event_name}</h3>
                                <div className="flex items-center text-gray-400 mb-2">
                                    <span className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300 mr-2">
                                        {event.event_category}
                                    </span>
                                    <span className="text-sm">ID: {event.id}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-start text-gray-300">
                                    <MdCalendarToday className="mr-3 mt-1 text-gray-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Tanggal & Waktu</p>
                                        <p className="text-sm text-gray-400">{formatDate(event.event_date)}</p>
                                        <p className="text-sm text-gray-400">{formatTime(event.event_time)}</p>
                                    </div>
                                </div>

                                <div className="flex items-start text-gray-300">
                                    <MdLocationOn className="mr-3 mt-1 text-gray-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Lokasi</p>
                                        <p className="text-sm text-gray-400">{event.event_location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start text-gray-300">
                                    <MdPerson className="mr-3 mt-1 text-gray-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Penyelenggara</p>
                                        <p className="text-sm text-gray-400">{event.event_organizer}</p>
                                    </div>
                                </div>

                                <div className="flex items-start text-gray-300">
                                    <MdCategory className="mr-3 mt-1 text-gray-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Kategori</p>
                                        <p className="text-sm text-gray-400">{event.event_category}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                                    <MdInfo className="mr-2" />
                                    Deskripsi
                                </h4>
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <p className="text-gray-300 whitespace-pre-line">{event.event_description}</p>
                                </div>
                            </div>

                            {/* event Metadata */}
                            {(event.created_at || event.updated_at) && (
                                <div className="border-t border-gray-700 pt-6">
                                    <h4 className="text-sm font-medium text-gray-300 mb-3">Informasi Sistem</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                                        {event.created_at && (
                                            <div>
                                                <span className="font-medium">Dibuat:</span>
                                                <br />
                                                {formatDateTime(event.created_at)}
                                            </div>
                                        )}
                                        {event.updated_at && (
                                            <div>
                                                <span className="font-medium">Terakhir diupdate:</span>
                                                <br />
                                                {formatDateTime(event.updated_at)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-700 bg-gray-800/90 sticky bottom-0">
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-400">
                            Kegiatan #{event.id} • {event.event_category}
                        </div>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => { onEdit(event); onClose(); }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Edit Kegiatan
                            </button>
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
