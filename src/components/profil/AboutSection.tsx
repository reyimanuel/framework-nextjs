import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tentang HME UNSRAT</h2>
            <p className="text-lg text-gray-700 mb-4">
              Himpunan Mahasiswa Elektro merupakan organisasi struktural independen yang berada di Jurusan Elektro
              Fakultas Teknik Universitas Sam Ratulangi.
            </p>
            <p className="text-gray-600 mb-4">
              HME didirikan di Jurusan Elektro Fakultas Teknik UNSRAT pada tanggal 5 September 1993 atas dasar pemikiran
              mulia dari mahasiswa Elektro pada saat itu dengan berlandaskan azas demokrasi mahasiswa yakni, Dari Oleh
              dan Untuk mahasiswa yang berfungsi sebagai jalur komunikasi, media informasi dan penampung serta pengemban
              aspirasi anggotanya.
            </p>
            <p className="text-gray-600">
              HME bertujuan untuk menampung, mewujudkan, meningkatkan dan mengembangkan kemampuan anggotanya yang
              meliputi bidang Akademik dan non-Akademik dengan dijiwai rasa kebersamaan dan tanggung jawab untuk
              menghasilkan sarjana Teknik Elektro yang potensial.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo/HME.png"
              className="rounded-full bg-white p-2 shadow-lg"
              alt="HME UNSRAT"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
