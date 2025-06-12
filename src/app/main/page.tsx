import HeroSection from "@/shared/HeroSection"
import AnnouncementSection from "@/shared/AnnouncementSection"
import AboutSection from "@/shared/AboutSection"
import FeaturesSection from "@/shared/FeaturesSection"
import EventsSection from "@/shared/EventsSection"
// import ContactSection from "@/shared/ContactSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AnnouncementSection />
      <AboutSection />
      <FeaturesSection />
      <EventsSection />
      {/* <ContactSection /> */}
    </main>
  )
}
