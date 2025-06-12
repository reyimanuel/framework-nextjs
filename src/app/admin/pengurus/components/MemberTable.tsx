"use client";

import { useEffect, useMemo, useState } from "react";
import { MdEdit, MdDelete, MdSearch, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { deleteMember, fetchAllMembers, updateMember } from "@/app/service/api";
import EditMemberForm from "@/app/admin/pengurus/components/EditMember";
import toast from "react-hot-toast";
import { Member, MemberTableProps } from "@/app/admin/pengurus/components/types/member";

export default function MemberTable({ refreshTrigger }: MemberTableProps) {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("Semua");
  const [loading, setLoading] = useState<boolean>(true);
  const [editMember, setEditMember] = useState<Member | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState<number | null>(null);
  const [internalRefreshTrigger, setInternalRefreshTrigger] = useState(0);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Member; direction: "ascending" | "descending" } | null>({ key: "name", direction: "ascending" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filterOptions = ["Semua", "Non Bidang", "Keilmuwan & Penalaran", "Minat & Bakat", "Kesejahteraan Mahasiswa", "Umum & Sarana Prasarana", "Bursa & Pendanaan", "Kerohanian", "Humas & Kemitraan"];

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const data = await fetchAllMembers();
      setMembers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Gagal mengambil data anggota:", err);
      setMembers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [refreshTrigger, internalRefreshTrigger]);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-600 border-green-700";
      case "Inactive":
        return "bg-yellow-600 border-yellow-700";
      case "Alumni":
        return "bg-blue-600 border-blue-700";
      default:
        return "bg-gray-600 border-gray-700";
    }
  };

  const filteredMembers = members.filter((member) => (member.name.toLowerCase().includes(searchTerm.toLowerCase()) || member.role.toLowerCase().includes(searchTerm.toLowerCase()) || member.division.toLowerCase().includes(searchTerm.toLowerCase())) && (selectedFilter === "Semua" || member.division === selectedFilter));

  const sortedMembers = useMemo(() => {
    const sortableItems = [...filteredMembers]; // Salin array agar tidak mengubah state asli
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredMembers, sortConfig]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTableData = sortedMembers.slice(indexOfFirstItem, indexOfLastItem);

  const handleEditMember = (member: Member) => {
    setEditMember(member);
  };

  const handleEditSubmit = async (data: Member) => {
    try {
      await updateMember(data.id, {
        name: data.name,
        role: data.role,
        division: data.division,
        year: data.year,
        status: data.status,
      });
      toast.success("Data pengurus berhasil diperbarui!");
      setEditMember(null);
      setInternalRefreshTrigger((prev) => prev + 1);
    } catch (error) {
      console.error("Gagal memperbarui data anggota:", error);
      toast.error("Gagal memperbarui data pengurus.");
    }
  };

  const handleDeleteMember = (id: number) => {
    setMemberToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteMember = async () => {
    try {
      if (memberToDelete === null) return;

      console.log("Deleting member with ID:", memberToDelete);
      await deleteMember(memberToDelete);
      toast.success("Pengurus berhasil dihapus!");
      setIsDeleteModalOpen(false);
      setMemberToDelete(null);
      setInternalRefreshTrigger((prev) => prev + 1);
    } catch (error) {
      console.error("Gagal menghapus anggota:", error);
      toast.error("Gagal menghapus pengurus.");
    }
  };

  // Kalkulasi untuk info pagination
  const totalPages = Math.ceil(sortedMembers.length / itemsPerPage);

  const requestSort = (key: keyof Member) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Fungsi untuk pagination
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-700 gap-4">
        <h2 className="text-lg font-medium text-white shrink-0">Daftar Pengurus</h2>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">

          {/* 1. Search Input (Sudah Benar) */}
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Cari nama, jabatan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-700 text-white text-sm rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <MdSearch className="absolute left-2.5 top-2.5 text-gray-400" />
          </div>

          {/* 2. Filter by Division Dropdown (Sudah Benar) */}
          <div className="w-full sm:w-auto">
            <label htmlFor="filter-divisi" className="sr-only">Filter Divisi</label>
            <select
              id="filter-divisi"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option === "Semua" ? "Semua Divisi" : option}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Sort Controls (BARU & DIPERBAIKI) */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label htmlFor="sort-by" className="sr-only">Urutkan Berdasarkan</label>
            {/* Dropdown untuk memilih kolom yang akan diurutkan */}
            <select
              id="sort-by"
              value={sortConfig?.key || 'name'}
              onChange={(e) => requestSort(e.target.value as keyof Member)}
              className="bg-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="name">Nama</option>
              <option value="role">Jabatan</option>
              <option value="division">Divisi</option>
              <option value="year">Tahun</option>
            </select>

            {/* Tombol untuk mengubah arah urutan (Ascending/Descending) */}
            <button
              onClick={() => requestSort(sortConfig?.key || 'name')}
              className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
              aria-label="Ubah arah urutan"
            >
              {sortConfig?.direction === 'ascending' ?
                <MdArrowUpward className="text-gray-300 h-5 w-5" /> :
                <MdArrowDownward className="text-gray-300 h-5 w-5" />
              }
            </button>
          </div>

        </div>
      </div>


      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700/50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Nama
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Jabatan
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Divisi
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Tahun
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-400">
                  Memuat data anggota...
                </td>
              </tr>
            ) : currentTableData.length > 0 ? (
              currentTableData.map((member) => (
                <tr key={member.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{member.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{member.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300">{member.division}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{member.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusBadgeClass(member.status)} text-white`}>{member.status}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <div className="flex space-x-3">
                      <button className="text-gray-400 hover:text-yellow-400 transition-colors" onClick={() => handleEditMember(member)}>
                        <MdEdit className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-red-400 transition-colors" onClick={() => handleDeleteMember(member.id)}>
                        <MdDelete className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-400">
                  Tidak ada pengurus yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-gray-700 px-6 py-3">
        {/* Info Jumlah Data */}
        <div className="text-sm text-gray-400">
          Menampilkan <span className="font-medium text-white">{currentTableData.length}</span> dari <span className="font-medium text-white">{sortedMembers.length}</span> pengurus
        </div>

        {/* Navigasi Halaman */}
        <div className="flex items-center space-x-2">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>

          <span className="text-sm text-gray-300 font-medium">
            Halaman {currentPage} dari {totalPages}
          </span>

          <button onClick={handleNextPage} disabled={currentPage === totalPages || totalPages === 0} className="px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </div>

      <EditMemberForm member={editMember} isOpen={editMember !== null} onClose={() => setEditMember(null)} onSubmit={handleEditSubmit} />

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-md border border-gray-700 p-6">
            <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
            <p className="text-gray-300 mb-6">Apakah Anda yakin ingin menghapus pengurus ini? Tindakan ini tidak dapat dibatalkan.</p>

            <div className="flex justify-end space-x-3">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                Batal
              </button>

              <button onClick={confirmDeleteMember} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
