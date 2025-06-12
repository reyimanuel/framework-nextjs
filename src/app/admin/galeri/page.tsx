"use client"
import { useState } from "react"
import DashboardLayout from "@/app/admin/dashboard/components/Layout"
import GalleryGrid from "@/app/admin/galeri/components/GalleryGrid"
import GalleryStats from "@/app/admin/galeri/components/GalleryStats"
import AddGalleryForm from "@/app/admin/galeri/components/AddGalleryForm"
import { MdAdd } from "react-icons/md"

export default function GaleriPage() {
    const [refreshTrigger, setRefreshTrigger] = useState(false)
    const [isAddImageOpen, setIsAddImageOpen] = useState(false)

    const handleRefresh = () => {
        setRefreshTrigger((prev) => !prev)
    }

    return (
        <DashboardLayout>
            <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Manajemen Galeri</h1>
                        <p className="text-gray-400">Kelola foto dan album HME UNSRAT</p>
                    </div>
                    <button
                        onClick={() => setIsAddImageOpen(true)}
                        className="mt-4 sm:mt-0 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        <MdAdd className="mr-1" /> Tambah Foto
                    </button>
                </div>

                <GalleryStats refreshTrigger={refreshTrigger} onRefresh={handleRefresh} />
            </div>

            <div className="mb-8">
                <GalleryGrid refreshTrigger={refreshTrigger} onRefresh={handleRefresh} />
            </div>

            {/* Add Image Form Modal */}
            <AddGalleryForm
                isOpen={isAddImageOpen}
                onClose={() => setIsAddImageOpen(false)}
                onSuccess={() => {
                    setIsAddImageOpen(false);
                    handleRefresh();
                }}
            />

        </DashboardLayout>
    )
}
