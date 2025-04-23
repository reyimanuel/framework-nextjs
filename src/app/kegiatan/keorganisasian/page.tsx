import type { Metadata } from "next"
import SubkegiatanPage from "@/components/kegiatan/SubEvent"
import { organizationalEvents } from "@/components/data/events"

export const metadata: Metadata = {
  title: "Kegiatan Keorganisasian - Himpunan Mahasiswa Elektro UNSRAT",
  description: "Daftar kegiatan keorganisasian Himpunan Mahasiswa Elektro Universitas Sam Ratulangi",
}

export default function KeorganisasianPage() {
  return (
    <SubkegiatanPage
      title="Kegiatan Keorganisasian"
      description="Kegiatan keorganisasian HME UNSRAT meliputi kegiatan internal seperti rapat, musyawarah, dan kegiatan keakraban, serta kegiatan eksternal seperti kerjasama dengan organisasi lain."
      events={organizationalEvents}
      categorySlug="keorganisasian"
      filterCategories={["Internal", "Eksternal", "Seremonial"]}
    />
  )
}
