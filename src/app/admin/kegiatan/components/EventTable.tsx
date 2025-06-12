"use client";

import { useEffect, useMemo, useState } from "react";
import { MdSearch, MdCalendarToday, MdVisibility, MdEdit, MdDelete } from "react-icons/md";
import { fetchAllEvents, deleteEvent } from "@/app/service/api";
import type { Event, EventTableProps } from "@/app/admin/kegiatan/components/types/event";
import EditEventForm from "@/app/admin/kegiatan/components/EditEventForm";
import ViewEventModal from "@/app/admin/kegiatan/components/ViewEventModal";
import { toast } from "react-hot-toast";

export default function EventTable({ refreshTrigger, onRefresh }: EventTableProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // --- STATE UNTUK FITUR INTERAKTIF ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [sortConfig] = useState<{ key: keyof Event; direction: "ascending" | "descending" } | null>({ key: "event_name", direction: "ascending" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // --- STATE UNTUK MODAL ---
  const [viewEvent, setViewEvent] = useState<Event | null>(null);
  const [editEvent, setEditEvent] = useState<Event | null>(null);
  const [eventToDelete, setEventToDelete] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const filterOptions = ["All", "Akademik", "Kompetisi", "Pengabdian", "Keorganisasian"];

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const data = await fetchAllEvents();
        setEvents(Array.isArray(data) ? data : []);
      } catch (error) {
        toast.error("Gagal memuat data kegiatan. Silakan coba lagi.");
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [refreshTrigger]);

  const processedEvents = useMemo(() => {
    // 1. FILTER
    const filtered = events.filter((event) => {
      const matchesSearch = event.event_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = selectedFilter === "All" || event.event_category === selectedFilter;
      return matchesSearch && matchesFilter;
    });

    // 2. SORT
    if (sortConfig !== null) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key] ?? '';
        const bValue = b[sortConfig.key] ?? '';

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [events, searchTerm, selectedFilter, sortConfig]);

  const totalPages = Math.ceil(processedEvents.length / itemsPerPage);
  const currentTableData = processedEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
  };

  const handleEditEvent = (event: Event) => {
    setEditEvent(event);
  };

  const handleDeleteEvent = (id: number) => {
    setEventToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleEditSubmit = () => {
    onRefresh();
  };

  const handleViewEvent = (event: Event) => {
    setViewEvent(event)
  }

  // Di dalam komponen EventTable

  const confirmDeleteEvent = async () => {
    if (!eventToDelete) return;

    setIsDeleting(true);

    try {
      await deleteEvent(eventToDelete);

      toast.success("Kegiatan berhasil dihapus.");

      onRefresh();

    } catch (error) {
      console.error("Gagal menghapus event:", error);
      toast.error("Gagal menghapus kegiatan. Silakan coba lagi.");
    } finally {
      setIsDeleteModalOpen(false);
      setEventToDelete(null);
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-700 gap-4">
          <h2 className="text-lg font-medium text-white shrink-0">Daftar Kegiatan</h2>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-auto">
              <input type="text" placeholder="Cari kegiatan..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-gray-700 text-sm rounded-lg pl-8 pr-4 py-2 w-full" />
              <MdSearch className="absolute left-2.5 top-2.5 text-gray-400" />
            </div>
            {/* Filter Dropdown */}
            <div className="w-full sm:w-auto">
              <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="bg-gray-700 text-sm rounded-lg px-3 py-2 w-full">
                {filterOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Nama Kegiatan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Tanggal & Waktu</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Lokasi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-400">Memuat kegiatan...</td>
                </tr>
              ) : currentTableData.length > 0 ? (
                currentTableData.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm">
                      <div className="text-sm font-medium text-white">{event.event_name}</div>
                      <div className="text-xs text-gray-400 mt-1">Penyelenggara: {event.event_organizer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-300">
                        <MdCalendarToday className="mr-1.5 text-gray-400" />
                        <div>
                          <div>{new Date(event.event_date).toLocaleDateString("id-ID")}</div>
                          <div className="text-xs text-gray-400">{event.event_time}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300">{event.event_category}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{event.event_location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusBadgeClass(event.event_status)} text-white`}>{event.event_status}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <div className="flex space-x-3">
                        <button onClick={() => handleViewEvent(event)} className="text-gray-400 hover:text-blue-400 transition-colors">
                          <MdVisibility className="h-5 w-5" />
                        </button>
                        <button onClick={() => handleEditEvent(event)} className="text-gray-400 hover:text-yellow-400 transition-colors">
                          <MdEdit className="h-5 w-5" />
                        </button>
                        <button onClick={() => handleDeleteEvent(event.id)} className="text-gray-400 hover:text-red-400 transition-colors">
                          <MdDelete className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-400">Tidak ada kegiatan yang ditemukan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-700">
          <div className="text-sm text-gray-400">
            Menampilkan <span className="font-medium text-white">{currentTableData.length}</span> dari <span className="font-medium text-white">{processedEvents.length}</span> kegiatan
          </div>
          <div className="flex items-center space-x-1">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 rounded bg-gray-700 disabled:opacity-50">Previous</button>
            <span className="px-3 py-1 text-sm">Halaman {currentPage} dari {totalPages}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages || totalPages === 0} className="px-3 py-1 rounded bg-gray-700 disabled:opacity-50">Next</button>
          </div>
        </div>

      </div>

      <ViewEventModal event={viewEvent} onClose={() => setViewEvent(null)} onEdit={handleEditEvent} />

      <EditEventForm
        event={editEvent}
        isOpen={editEvent !== null}
        onClose={() => setEditEvent(null)}
        onSuccess={handleEditSubmit}
      />

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-md border border-gray-700 p-6">
            <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
            <p className="text-gray-300 mb-6">
              Apakah Anda yakin ingin menghapus kegiatan ini? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={confirmDeleteEvent}
                disabled={isDeleting}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={confirmDeleteEvent}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                {isDeleting ? "Menghapus..." : "Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}