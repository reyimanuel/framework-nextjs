import HeroShared from "@/shared/HeroShared"
import OrganizationStructureSection from "@/app/kepengurusan/components/OrganizationStructureSection"
import CoreTeamSection from "@/app/kepengurusan/components/CoreTeamSection"
import DepartmentsSection from "@/app/kepengurusan/components/DepartmentsSection"
import WorkProgramsSection from "@/app/kepengurusan/components/WorkProgramsSection"
import GallerySection from "@/app/kepengurusan/components/GallerySection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kepengurusan - Himpunan Mahasiswa Elektro UNSRAT",
  description: "Struktur kepengurusan Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
}

export default function KepengurusanPage() {
  return (
    <main>
      <HeroShared 
      title="Kepengurusan HME FT UNSRAT"
      description="Struktur organisasi dan pengurus Himpunan Mahasiswa Elektro periode 2024-2025"
      />
      <OrganizationStructureSection />
      <CoreTeamSection />
      <DepartmentsSection />
      <WorkProgramsSection />
      <GallerySection />
    </main>
  )
}
