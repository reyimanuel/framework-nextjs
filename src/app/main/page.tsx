import HeroSection from "@/components/HeroSection"
import AnnouncementSection from "@/components/AnnouncementSection"
import AboutSection from "@/components/AboutSection"
import FeaturesSection from "@/components/FeaturesSection"
import EventsSection from "@/components/EventsSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AnnouncementSection />
      <AboutSection />
      <FeaturesSection />
      <EventsSection />
      <ContactSection />
    </main>
  )
}
