import HeroShared from "@/shared/HeroShared"
import PhotoAlbumsSection from "@/app/galeri/components/PhotoAlbumsSection"
import FeaturedPhotosSection from "@/app/galeri/components/FeaturedPhotoSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeri - Himpunan Mahasiswa Elektro UNSRAT",
  description: "Galeri foto kegiatan Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
}

export default function GaleriPage() {
  return (
    <main>
      <HeroShared
        title="Galeri HME FT UNSRAT"
        description="Dokumentasi kegiatan dan momen berharga Himpunan Mahasiswa Elektro Universitas Sam Ratulangi"
      />
      <FeaturedPhotosSection />
      <PhotoAlbumsSection />
    </main>
  )
}
