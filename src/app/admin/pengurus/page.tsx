"use client"
import { useState } from "react"
import DashboardLayout from "@/app/admin/dashboard/components/Layout"
import MemberTable from "@/app/admin/pengurus/components/MemberTable"
import DivisionStats from "@/app/admin/pengurus/components/DivisionStats"
import AddMemberForm from "@/app/admin/pengurus/components/AddMemberForm"
import { MdAdd } from "react-icons/md"

export default function PengurusPage() {
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(false)

const handleRefreshMembers = () => {
  setRefreshTrigger(prev => !prev) // toggle untuk memicu useEffect
}

  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Manajemen Pengurus</h1>
            <p className="text-gray-400">Kelola data pengurus HME UNSRAT</p>
          </div>
          <button
            onClick={() => setIsAddMemberOpen(true)}
            className="mt-4 sm:mt-0 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <MdAdd className="mr-1" /> Tambah Pengurus
          </button>
        </div>

        <DivisionStats />
      </div>

      <div className="mb-8">
        <MemberTable refreshTrigger={refreshTrigger} />
      </div>

      <AddMemberForm
        isOpen={isAddMemberOpen}
        onClose={() => setIsAddMemberOpen(false)}
        onSuccess={() => {
          setIsAddMemberOpen(false)
          handleRefreshMembers()
        }}
      />
    </DashboardLayout>
  )
}
