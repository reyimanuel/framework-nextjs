import HeroShared from "@/shared/HeroShared"
import ContactInfo from "@/app/kontak/components/ContactInfo"
// import ContactForm from "@/app/kontak/components/ContactForm"
import LocationMap from "@/app/kontak/components/LocationMap"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Kontak - Himpunan Mahasiswa Elektro UNSRAT",
  description: "Hubungi Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
}

export default function KontakPage() {
  return (
    <main>
      <HeroShared
        title="Kontak HME FT UNSRAT"
        description="Hubungi kami untuk mendapat informasi lebih lanjut"
      />
      <div className="container mx-auto px-4 py-12 -mt-10 relative z-10">
        <ContactInfo />
        {/* 
        <div className="mt-20">
          <ContactForm />
        </div> */}

        <div className="mt-20">
          <LocationMap />
        </div>
      </div>
    </main>
  )
}
