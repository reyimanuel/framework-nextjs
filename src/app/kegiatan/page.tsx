import HeroShared from "@/components/shared/HeroShared"
import UpcomingEventsSection from "@/components/kegiatan/UpcomingEventsSection"
import EventCategoriesSection from "@/components/kegiatan/EventCategoriesSection"
import AcademicEventsSection from "@/components/kegiatan/AcademicEventsSection"
import CompetitionEventsSection from "@/components/kegiatan/CompetitionEventsSection"
import CommunityServiceSection from "@/components/kegiatan/CommunityServiceSection"
import OrganizationalEventsSection from "@/components/kegiatan/OrganizationalEventsSection"
import EventRegistrationSection from "@/components/kegiatan/EventRegistrationSection"
import FaqSection from "@/components/kegiatan/FaqSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kegiatan - Himpunan Mahasiswa Elektro UNSRAT",
  description: "Kegiatan dan acara Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
}

export default function KegiatanPage() {
  return (
    <main>
      <HeroShared
      title="Kegiatan HME FT UNSRAT" 
      description="Kegiatan Himpunan Mahasiswa Elektro UNSRAT"
      />
      <UpcomingEventsSection />
      <EventCategoriesSection />
      <AcademicEventsSection />
      <CompetitionEventsSection />
      <CommunityServiceSection />
      <OrganizationalEventsSection />
      <EventRegistrationSection />
      <FaqSection />
    </main>
  )
}
