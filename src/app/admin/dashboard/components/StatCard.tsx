"use client";
import { useState, useEffect, type ReactNode } from "react";
import { MdWarningAmber } from "react-icons/md";

// 1. Ubah Props: Hapus 'value', tambahkan 'fetcher'
interface StatCardProps {
  title: string;
  icon: ReactNode;
  bgColor: string;
  fetcher: () => Promise<unknown[] | null>; // Fungsi yang akan mengambil data
}

export default function StatCard({ title, icon, bgColor, fetcher }: StatCardProps) {
  // 2. Tambahkan state internal untuk nilai, loading, dan error
  const [value, setValue] = useState<string>("..."); // Nilai awal saat loading
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 3. useEffect untuk menjalankan 'fetcher' saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetcher();
        // Hitung jumlah item dari data yang diterima
        setValue((data || []).length.toString());
      } catch (err) {
        console.error(`Gagal memuat data untuk '${title}':`, err);
        setError(true);
        setValue("!"); // Tanda error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Kita hanya ingin fetcher dijalankan sekali, jadi dependency array bisa kosong
    // atau berisi [fetcher] jika fungsi tersebut di-memoize dengan useCallback di parent.
    // Untuk kesederhanaan, kita gunakan array kosong.
  }, [fetcher, title]);

  return (
    <div
      className={`bg-gradient-to-r ${bgColor} rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
    >
      <div className="px-6 py-6 sm:p-6 relative">
        <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 opacity-20">{icon}</div>
        <div className="relative z-10">
          <p className="text-sm font-medium text-gray-300 mb-1">{title}</p>
          <div className="flex items-baseline">
            {/* 4. Tampilkan state internal, bukan prop */}
            <p className={`text-3xl font-bold text-white transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
              {value}
            </p>
            {/* Tampilkan ikon error jika terjadi kegagalan */}
            {error && <MdWarningAmber className="ml-2 text-red-300" size={24} />}
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
        </div>
      </div>
    </div>
  );
}