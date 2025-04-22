import HeroShared from "@/components/shared/HeroShared"
import AboutSection from "@/components/profil/AboutSection"
import VisionMissionSection from "@/components/profil/VisionMissionSection"
import ValuesSection from "@/components/profil/ValuesSection"
import ChairpersonHistorySection from "@/components/profil/ChairpersonHistorySection"
import OrganizationStructureSection from "@/components/profil/OrganizationStructureSection"
import FaqSection from "@/components/profil/FaqSection"
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
