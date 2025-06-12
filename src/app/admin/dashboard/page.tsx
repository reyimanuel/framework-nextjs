"use client";

import React from "react";
import { useState } from "react";
import DashboardLayout from "@/app/admin/dashboard/components/Layout";
import StatCard from "@/app/admin/dashboard/components/StatCard";
import EventTable from "@/app/admin/kegiatan/components/EventTable";
import MembersList from "@/app/admin/dashboard/components/MemberList";
import GalleryPreview from "@/app/admin/dashboard/components/GalleryPreview";
import { MdPeople, MdEvent, MdPhotoLibrary } from "react-icons/md";
import { fetchAllEvents, fetchAllGalleries, fetchAllMembers } from "@/app/service/api";

export default function DashboardPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleRefresh = () => {
    setRefreshTrigger((prev) => !prev);
  };
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard title="Total Kegiatan" icon={<MdEvent size={80} />} bgColor="from-blue-600 to-blue-800" fetcher={fetchAllEvents} />
        <StatCard title="Total Foto Galeri" icon={<MdPhotoLibrary size={80} />} bgColor="from-teal-600 to-teal-800" fetcher={fetchAllGalleries} />
        <StatCard title="Total Pengurus" icon={<MdPeople size={80} />} bgColor="from-purple-600 to-purple-800" fetcher={fetchAllMembers} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EventTable refreshTrigger={refreshTrigger} onRefresh={handleRefresh} />
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
