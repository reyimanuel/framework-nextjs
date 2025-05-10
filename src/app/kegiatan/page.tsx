import HeroShared from "@/shared/HeroShared"
import UpcomingEventsSection from "@/app/kegiatan/components/UpcomingEventsSection"
import EventCategoriesSection from "@/app/kegiatan/components/EventCategoriesSection"
import AcademicEventsSection from "@/app/kegiatan/components/AcademicEventsSection"
import CompetitionEventsSection from "@/app/kegiatan/components/CompetitionEventsSection"
import CommunityServiceSection from "@/app/kegiatan/components/CommunityServiceSection"
import OrganizationalEventsSection from "@/app/kegiatan/components/OrganizationalEventsSection"
import EventRegistrationSection from "@/app/kegiatan/components/EventRegistrationSection"
import FaqSection from "@/app/kegiatan/components/FaqSection"
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
