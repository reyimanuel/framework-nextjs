import HeroShared from "@/shared/HeroShared"
import AboutSection from "@/app/profil/components/AboutSection"
import VisionMissionSection from "@/app/profil/components/VisionMissionSection"
import ValuesSection from "@/app/profil/components/ValuesSection"
import ChairpersonHistorySection from "@/app/profil/components/ChairpersonHistorySection"
import OrganizationStructureSection from "@/app/profil/components/OrganizationStructureSection"
import FaqSection from "@/app/profil/components/FaqSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profil - Himpunan Mahasiswa Elektro UNSRAT",
  description: "Profil Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
}

export default function ProfilPage() {
  return (
    <main>
      <HeroShared
        title="Profil HME FT UNSRAT"
        description="Mengenal lebih dekat Himpunan Mahasiswa Elektro Universitas Sam Ratulangi"
      />
      <AboutSection />
      <VisionMissionSection />
      <ValuesSection />
      <ChairpersonHistorySection />
      <OrganizationStructureSection />
      <FaqSection />
    </main>
  )
}
