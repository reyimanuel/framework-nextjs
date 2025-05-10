import type { Metadata } from "next"
import SubkegiatanPage from "@/app/kegiatan/components/SubEvent"
import { competitionEvents } from "@/data/events"

export const metadata: Metadata = {
  title: "Kompetisi - Himpunan Mahasiswa Elektro UNSRAT",
  description: "Daftar kompetisi yang diselenggarakan oleh Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
}

export default function KompetisiPage() {
  return (
    <SubkegiatanPage
      title="Kompetisi"
      description="HME UNSRAT menyelenggarakan berbagai kompetisi baik di bidang akademik maupun non-akademik untuk mengembangkan bakat dan minat mahasiswa Teknik Elektro."
      events={competitionEvents}
      categorySlug="kompetisi"
      filterCategories={["Tournament", "Contest", "E-Sports"]}
    />
  )
}
