import type { Metadata } from "next"
import SubkegiatanPage from "@/components/kegiatan/SubEvent"
import { academicEvents } from "@/components/data/events"

export const metadata: Metadata = {
  title: "Kegiatan Akademik - Himpunan Mahasiswa Elektro UNSRAT",
  description: "Daftar kegiatan akademik Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
}

export default function AkademikPage() {
  return (
    <SubkegiatanPage
      title="Kegiatan Akademik"
      description="Kegiatan akademik HME UNSRAT meliputi seminar, workshop, pelatihan, dan study club yang bertujuan untuk meningkatkan pengetahuan dan keterampilan mahasiswa di bidang teknik elektro."
      events={academicEvents}
      categorySlug="akademik"
      filterCategories={["Seminar", "Workshop", "Pelatihan", "Study Club", "Webinar", "Talkshow"]}
    />
  )
}
