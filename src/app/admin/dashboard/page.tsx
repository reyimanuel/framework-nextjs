import React from "react";
import DashboardLayout from "@/app/admin/dashboard/components/Layout";
import StatCard from "@/app/admin/dashboard/components/StatCard";
import ActivityTable from "@/app/admin/dashboard/components/ActivityTable";
import MembersList from "@/app/admin/dashboard/components/MemberList";
import GalleryPreview from "@/app/admin/dashboard/components/GalleryPreview";
import { MdPeople, MdEvent, MdPhoto } from "react-icons/md";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard 
          title="Total Pengurus" 
          value="24" 
          icon={<MdPeople className="h-8 w-8 text-blue-400" />}
          bgColor="from-blue-900 to-blue-800" 
        />
        <StatCard 
          title="Kegiatan Aktif" 
          value="12" 
          icon={<MdEvent className="h-8 w-8 text-red-400" />}
          bgColor="from-red-900 to-red-800" 
        />
        <StatCard 
          title="Foto Galeri" 
          value="85" 
          icon={<MdPhoto className="h-8 w-8 text-green-400" />}
          bgColor="from-green-900 to-green-800" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityTable />
        </div>
        <div className="lg:col-span-1">
          <MembersList />
        </div>
      </div>
      
      <div className="mt-6">
        <GalleryPreview />
      </div>
    </DashboardLayout>
  );
}