export default function CoreTeamSection() {
  const coreTeam = [
    {
      name: "Neoville Tajujung",
      position: "Ketua Umum",
      description:
        "Mahasiswa Teknik Elektro yang memimpin organisasi HME UNSRAT dengan visi dan misi yang jelas untuk kemajuan mahasiswa elektro.",
    },
    {
      name: "Julio Roring",
      position: "Wakil Ketua Umum",
      description:
        "Mendukung ketua umum dalam menjalankan program kerja dan bertanggung jawab atas koordinasi antar bidang dalam organisasi.",
    },
    {
      name: "Sydney Pesiwarissa",
      position: "Sekretaris",
      description: "Bertanggung jawab atas administrasi, dokumentasi, dan surat-menyurat dalam organisasi HME UNSRAT.",
    },
    {
      name: "Diendels Saryono",
      position: "Wakil Sekretaris",
      description: "Membantu sekretaris dalam menjalankan tugas administrasi dan dokumentasi kegiatan organisasi.",
    },
    {
      name: "Micha Wungow",
      position: "Bendahara",
      description: "Bertanggung jawab atas pengelolaan keuangan dan pelaporan keuangan organisasi HME UNSRAT.",
    },
    {
      name: "Yuan Mantiri",
      position: "Wakil Bendahara",
      description: "Membantu bendahara dalam mengelola keuangan dan membuat laporan keuangan organisasi.",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-10 relative">
          Deskripsi Pengurus Inti
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTeam.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-blue-600 font-medium mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
