"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdMoreVert, MdEdit, MdDelete } from "react-icons/md";
import { fetchAllMembers, deleteMember } from "@/app/service/api"; // Impor fungsi API
import { Member } from "@/app/admin/pengurus/components/types/member"; // Impor tipe data
import AddMemberForm from "@/app/admin/pengurus/components/AddMemberForm"
import EditMemberForm from "@/app/admin/pengurus/components/EditMember"

export default function MembersList() {
  // 1. STATE MANAGEMENT: Tambahkan state untuk data, modal, dan refresh
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  // State untuk modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState<Member | null>(null);
  const [memberToDelete, setMemberToDelete] = useState<Member | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // State untuk memicu refresh internal
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  // 2. DATA FETCHING: Gunakan useEffect untuk mengambil data dari API
  useEffect(() => {
    const loadMembers = async () => {
      setLoading(true);
      try {
        const data = await fetchAllMembers();
        // Ambil 6 pengurus pertama saja untuk preview
        setMembers((data || []).slice(0, 6));
      } catch (error) {
        console.error("Gagal memuat data pengurus:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMembers();
  }, [refreshTrigger]); // Akan fetch ulang saat refreshTrigger berubah

  // 3. HANDLER FUNCTIONS: Definisikan semua fungsi untuk aksi CRUD
  const handleRefresh = () => setRefreshTrigger(prev => !prev);

  const handleActionSuccess = () => {
    handleRefresh();
    setIsAddModalOpen(false);
    setMemberToEdit(null);
  };

  const confirmDelete = async () => {
    if (!memberToDelete) return;
    setIsDeleting(true);
    try {
      await deleteMember(memberToDelete.id);
      alert("Pengurus berhasil dihapus.");
      handleRefresh();
    } catch (error) {
      console.error("Gagal menghapus pengurus:", error);
      alert("Gagal menghapus pengurus.");
    } finally {
      setIsDeleting(false);
      setMemberToDelete(null);
    }
  };

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <>
      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-medium">Pengurus Inti</h2>
          <Link href="/admin/pengurus" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            Lihat Semua
          </Link>
        </div>
        <div className="divide-y divide-gray-700">
          {loading ? (
            <p className="p-4 text-center text-gray-400">Memuat data...</p>
          ) : (
            members.map((member) => (
              <div key={member.id} className="p-4 hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{member.name}</p>
                    <p className="text-xs text-gray-400 truncate">{member.role}</p>
                  </div>
                  <div className="relative">
                    <button onClick={() => toggleDropdown(member.id)} className="p-1 rounded-full hover:bg-gray-600">
                      <MdMoreVert className="h-5 w-5" />
                    </button>
                    {activeDropdown === member.id && (
                      <div className="absolute right-0 mt-1 w-40 bg-gray-900 rounded-md shadow-lg py-1 z-10 border border-gray-700">
                        <button onClick={() => { setMemberToEdit(member); setActiveDropdown(null); }} className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                          <MdEdit /> Edit
                        </button>
                        <button onClick={() => { setMemberToDelete(member); setActiveDropdown(null); }} className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-gray-700">
                          <MdDelete /> Hapus
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-gray-700 bg-gray-800/50">
          <button onClick={() => setIsAddModalOpen(true)} className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
            + Tambah Pengurus Baru
          </button>
        </div>
      </div>

      {/* 4. RENDER SEMUA MODAL SECARA KONDISIONAL */}
      <AddMemberForm
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={handleActionSuccess}
      />

      <EditMemberForm
        isOpen={memberToEdit !== null}
        member={memberToEdit}
        onClose={() => setMemberToEdit(null)}
        onSubmit={handleActionSuccess}
      />

      {memberToDelete && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl w-full max-w-md p-6">
            <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
            <p className="text-gray-300 mb-6">Anda yakin ingin menghapus pengurus: <span className="font-bold">{memberToDelete.name}</span>?</p>
            <div className="flex justify-end space-x-3">
              <button onClick={() => setMemberToDelete(null)} className="px-4 py-2 bg-gray-700 rounded-lg">Batal</button>
              <button onClick={confirmDelete} disabled={isDeleting} className="px-4 py-2 bg-red-600 rounded-lg disabled:bg-red-900">
                {isDeleting ? "Menghapus..." : "Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}