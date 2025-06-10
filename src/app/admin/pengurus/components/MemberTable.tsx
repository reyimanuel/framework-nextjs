"use client"

import { useEffect, useState } from "react"
import { MdEdit, MdDelete, MdFilterList, MdSearch } from "react-icons/md"
import { deleteMember, fetchAllMembers, updateMember } from "@/app/service/api"
import EditMemberForm from "@/app/admin/pengurus/components/EditMember"
import toast from "react-hot-toast"
import { Member, MemberTableProps } from "@/app/admin/pengurus/components/types/member"

export default function MemberTable({ refreshTrigger }: MemberTableProps) {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("Semua");
  const [loading, setLoading] = useState<boolean>(true);
  const [editMember, setEditMember] = useState<Member | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState<number | null>(null);
  const [internalRefreshTrigger, setInternalRefreshTrigger] = useState(0);

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

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium mb-2 sm:mb-0">Daftar Pengurus</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <input type="text" placeholder="Cari pengurus..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-gray-700 text-white text-sm rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
            <MdSearch className="absolute left-2.5 top-2.5 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="bg-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
              <MdFilterList className="text-gray-300" />
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
            ) : filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
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
      <div className="px-6 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700">

        <div className="text-sm text-gray-400 mb-2 sm:mb-0">
          Menampilkan <span className="font-medium">{filteredMembers.length}</span> dari <span className="font-medium">{members.length}</span> pengurus
        </div>

        <div className="flex space-x-1">
          <button className="px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors">Previous</button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">1</button>
          <button className="px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors">Next</button>
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
