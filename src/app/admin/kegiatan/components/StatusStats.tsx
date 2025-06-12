'use client'

import { useState, useEffect } from 'react'
import { MdEvent, MdCheckCircle, MdAccessTime, MdCancel } from "react-icons/md"
import { fetchAllEvents } from '@/app/service/api';
import type { Status, Stats } from '@/app/admin/kegiatan/components/types/event';
import { toast } from "react-hot-toast"

export default function StatusStats() {
  // Berikan tipe `Stats` pada state
  const [stats, setStats] = useState<Stats>({
    active: 0,
    comingSoon: 0,
    completed: 0,
    inactive: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEventStats = async () => {
      try {
        const statuses: Status[] | undefined = await fetchAllEvents();

        if (!statuses || statuses.length === 0) {
          setError("Tidak ada data kegiatan untuk ditampilkan.");
        } else {
          const calculatedStats = statuses.reduce(
            (acc: Stats, status: Status) => {
              if (status.event_status === 'Active') acc.active++;
              else if (status.event_status === 'Coming Soon') acc.comingSoon++;
              else if (status.event_status === 'Completed') acc.completed++;
              else if (status.event_status === 'Inactive') acc.inactive++;
              return acc;
            },
            { active: 0, comingSoon: 0, completed: 0, inactive: 0 }
          );
          setStats(calculatedStats);
        }
      } catch (err) {
        console.error('Failed to fetch event stats:', err);
        toast.error('Gagal memuat statistik kegiatan.');
      } finally {
        setLoading(false);
      }
    };

    getEventStats();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading statistics...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-gray-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-300">Kegiatan Aktif</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.active}</p>
          </div>
          <div className="p-3 bg-black/20 rounded-full">
            <MdEvent className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-300">Kegiatan Mendatang</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.comingSoon}</p>
          </div>
          <div className="p-3 bg-black/20 rounded-full">
            <MdAccessTime className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-300">Kegiatan Selesai</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.completed}</p>
          </div>
          <div className="p-3 bg-black/20 rounded-full">
            <MdCheckCircle className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-300">Kegiatan Tidak Aktif</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.inactive}</p>
          </div>
          <div className="p-3 bg-black/20 rounded-full">
            <MdCancel className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}