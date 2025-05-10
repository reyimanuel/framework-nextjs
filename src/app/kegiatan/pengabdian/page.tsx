import type { Metadata } from "next"
import SubkegiatanPage from "@/app/kegiatan/components/SubEvent"
import { communityServiceEvents } from "@/data/events"

export const metadata: Metadata = {
  title: "Pengabdian Masyarakat - Himpunan Mahasiswa Elektro UNSRAT",
  description: "Daftar kegiatan pengabdian masyarakat Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
}

export default function PengabdianPage() {
  return (
    <SubkegiatanPage
      title="Pengabdian Masyarakat"
      description="HME UNSRAT berkomitmen untuk memberikan kontribusi positif kepada masyarakat melalui berbagai program pengabdian yang menerapkan ilmu teknik elektro untuk membantu menyelesaikan permasalahan di masyarakat."
      events={communityServiceEvents}
      categorySlug="pengabdian"
      filterCategories={["Pengabdian", "Edukasi", "Teknologi", "Pelatihan"]}
    />
  )
}
