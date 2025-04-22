"use client"

import { useState } from "react"
import { FaArrowUp, FaArrowDown, FaPeopleGroup, FaPersonShelter, FaHandsPraying } from "react-icons/fa6";
import { BsFillMortarboardFill, } from "react-icons/bs";
import { FaTrophy, FaPeopleCarry, } from "react-icons/fa";
import { PiHandsPrayingBold, PiMoneyFill, PiStudentFill } from "react-icons/pi";

export default function WorkProgramsSection() {
  const [activeAccordion, setActiveAccordion] = useState("collapseOne")

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id)
  }

  const workPrograms = [
    {
      id: "collapseOne",
      title: "Non Bidang",
      icon: <FaPeopleGroup size={28} className="text-white" />,
      programs: [
        {
          name: "Rapat Evaluasi BP HME FT-UNSRAT",
          description: "Rapat evaluasi dilakukan untuk mengevaluasi sejauh mana program kerja atau kegiatan mencapai tujuannya. Serta untuk mengetahui apa yang telah berhasil dan apa yang perlu ditingkatkan atau diperbaiki dari setiap program kerja HME.",
        },
        {
          name: "Pengkaderan (PAB)",
          description:
            "Sebagai sarana untuk mengembangkan generasi penerus yang kompeten, memastikan kontinuitas organisasi, dan memenuhi kebutuhan partisipasi serta kepemimpinan dalam lingkungan HME.",
        },
        {
          name: "DIES NATALIS HME Ke-31",
          description:
            "Perwujudan syukur atas perjalanan organisasi Himpunan Mahasiswa Elektro dalam memberikan kontribusi, melaksanakan kegiatan, dan pencapaian yang telah dilakukan. Serta menjadi momen untuk mengingat dan menghormati sejarah serta perjuangan organisasi, mengenang pencapaian dan tantangan yang telah dihadapi.",
        },
        {
          name: "Electro Serve (Pengmas)",
          description:
            "Kesadaran HME untuk melakukan Pengabdian Masyarakat sebagai wujud dan peran anggota dalam usaha menangani tantangan yang ada dalam Masyarakat yang berlandaskan pada Tridharma Perguruan Tinggi, dengan penekanan pada aspek atau bidang elektro.",
        },
        {
          name: "Malam Keakraban Anggota HME FT-UNSRAT",
          description:
            "Malam keakraban Badan Pengurus Himpunan Mahasiswa Elektro merupakan wadah yang disiapkan untuk mempererat hubungan sosial antara anggota Badan pengurus HME FT-UNSRAT.",
        },
        {
          name: "Study Excursie Electro",
          description:
            "Melibatkan kunjungan fasilitas industri untuk mempelajari aplikasi nyata teori yang dipelajari saat perkuliahan. Selain itu, bisa juga untuk mengunjungi perusahaan teknologi untuk melihat inovasi terbaru, atau bahkan fasilitas penelitian untuk memahami eksperimen dalam bidang elektro maupun informatika.",
        },
      ],
    },
    {
      id: "collapseTwo",
      title: "Bidang Keilmuwan & Penalaran",
      icon: <BsFillMortarboardFill size={28} className="text-white" />,
      programs: [
        {
          name: "Website HME",
          description: "Dalam era digital yang terus berkembang, penting bagi Himpunan Mahasiswa Elektro (HME) untuk menyediakan akses informasi yang mudah bagi anggota dan pihak luar.",
        },
        {
          name: "Mengurus dan Membimbing Anggota Tim PKM & Gemastik",
          description:
            "Masih banyak mahasiswa yang ingin mengembangkan hardskill mereka melalui sebuah tantangan. Tapi banyak juga yang belum tau mengembangkan hardskill mereka dimana. Maka dari itu program PKM dan Gemastiklah tempat yang bagus untuk mereka yang ingin mengembangkan diri mereka.",
        },
        {
          name: "Menyediakan IDE Materi FYI untuk Instagram Feeds HME",
          description:
            "Bidang sarana dan prasarana memiliki ide untuk membuat feeds IG dan dari bidang kami ingin membantu memberikan sebuah materi untuk bisa dipublikasikan.",
        },
        {
          name: "Workshop",
          description:
            "Workshop adalah alat efektif untuk meningkatkan kapasitas anggota Himpunan Mahasiswa Elektro (HME) dalam berbagai aspek kehidupan, baik dalam hal akademik, keterampilan teknis, atau pengembangan pribadi. Melalui penyelenggaraan workshop, HME dapat memberikan manfaat yang langsung kepada anggota dan meningkatkan nilai tambah organisasi.",
        },
      ],
    },
    {
      id: "collapseThree",
      title: "Bidang Minat & Bakat",
      icon: <FaTrophy size={28} className="text-white" />,
      programs: [
        {
          name: "Elektro Fun Sport",
          description: "Menjaga keakraban antar anggota HME-FT UNSRAT melalui kegiatan olahraga.",
        },
        {
          name: "Electrical Fun Music",
          description:
            "Sarana/wadah bagi mahasiswa terlebih khusus anggota HME dibidang music dan juga dalam rangka memperingati hari hari raya nasional.",
        },
      ],
    },
    {
      id: "collapseFour",
      title: "Bidang Kesejahteraan Mahasiswa",
      icon: <PiStudentFill size={28} className="text-white" />,
      programs: [
        {
          name: "HME Peduli",
          description: "Kegiatan ini merupakan bentuk kepedulian dan wujud kekeluargaan yang terjalin di HME FT-UNSRAT.",
        },
        {
          name: "Ruang Berdiskusi Elektro",
          description: "TKegiatan ini menjadi wadah untuk menjalin keakraban serta relasi antara anggota aktif HME- FT UNSRAT dan alumi.",
        },
        {
          name: "HME Tools",
          description: "Perlunya wadah bagi anggota HME FT- UNSRAT  untuk mengetahui perkembangan anggota, serta wadah menyampaiakn kelu kesa.",
        },
        {
          name: "Sharing Internship & Expo Beasiswa",
          description: "Adanya tantangan yang dihadapi mahasiswa HME FT- UNSRAT dalam menjalankan perkuliahan.",
        },
      ],
    },
    {
      id: "collapseFive",
      title: "Bidang Umum & Sarana Prasarana",
      icon: <FaPersonShelter size={28} className="text-white" />,
      programs: [
        {
          name: "Bidang Umum & Sarana Prasarana",
          description: "Kebersihan lingkungan kampus adalah tanggung jawab bersama, bukan hanya tugas petugas kebersihan. Merawat dan menjaga barang-barang serta fasilitas di HME FT-UNSRAT juga penting untuk menghemat dan mencegah kerusakan fasilitas yang merupakan aset milik HME FT-UNSRAT.",
        },
        {
          name: "Design KTA",
          description: "Setiap pengurus dan anggota HME FT-UNSRAT sebaiknya memiliki tanda pengenal yang resmi.",
        },
        {
          name: "Design Publikasi & Dokumentasi HME",
          description: "Untuk memperingati hari Perayaan Nasional, keagamaan, kelulusan, dan kedukaan, serta untuk proker-proker yang memerlukan pamflet untuk dipublikasikan.",
        },
      ],
    },
    {
      id: "collapseSix",
      title: "Bidang Bursa & Pendanaan",
      icon: <PiMoneyFill size={28} className="text-white" />,
      programs: [
        {
          name: "Iuran",
          description: "Untuk mendukung kegiatan dan operasional kepengurusan serta membantu menjaga independensi keuangan dan mendukung pengurus dalam menjalankan tugas mereka.",
        },
        {
          name: "Dana Wajib",
          description: "Di masa awal 1x Selama periode kepengurusankepengurusan perlunya pengurus untuk memberikan partisipasi dalam bentuk pemberian dana wajib untuk kebutuhan kegiatan himpunan kedepannya.",
        },
        {
          name: "Pos Dana",
          description: "Perlunya memenuhi kebutuhan dana HME FT-UNSRAT.",
        },
        {
          name: "Produksi PDH dan KTA",
          description: "Pakaian Dinas Harian dan Kartu Tanda Anggota merupakan pakaian  dan Kartu identifikasi wajib bagi seluruh anggota HME-FT UNSRAT.",
        },
        {
          name: "Sponsorship",
          description: "Mencari kemitraan dengan perusahaan atau sponsor terkait yang bersedia menyokong kegiatan HME FT-UNSRAT.",
        },
      ],
    },
    {
      id: "collapseSeven",
      title: "Bidang Kerohanian",
      icon: <FaHandsPraying size={28} className="text-white" />,
      programs: [
        {
          name: "Pranatal HME FT-UNSRAT Tahun 2023",
          description: "Kegiatan Pranatal merupakan ibadah yang dilaksanakan umat kristiani sebelum hari raya natal.",
        },
        {
          name: "Buka Puasa Bersama",
          description: "Buka puasa bersama dimaksudkan untuk menjalin kebersamaan dengan sesama yang beragama Muslim dalam masa puasa",
        },
        {
          name: "Ibadah anggota HME FT- UNSRAT",
          description: "ibadah yang dilaksanakan untuk dapat membangun spiritual kita dan merupakan ungkapan rasa syukur",
        },
      ],
    },
    {
      id: "collapseEight",
      title: "Bidang Humas & Kemitraan",
      icon: <FaPeopleCarry size={28} className="text-white" />,
      programs: [
        {
          name: "Kerja sama antar ormawa fakultas Teknik, Dosen fakultas teknik dan instansi diluar kampus",
          description: "Diperlukannya hubungan Kerjasama antar organisasi di fakultas teknik dan diluar lingkungan kampus.",
        },
        {
          name: "Program Magang HME",
          description: "Mencari program magang atau kerjasama dengan perusahaan atau pimpinan fakultas teknik untuk memberikan kesempatan kepada anggota himpunan dalam memperluas wawasan dan pengalaman praktis.",
        },
        {
          name: "Ibadah anggota HME FT- UNSRAT",
          description: "ibadah yang dilaksanakan untuk dapat membangun spiritual kita dan merupakan ungkapan rasa syukur",
        },
      ],
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10 relative">
          Program Kerja
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Program Kerja Periode 2024-2025</h3>
            <p className="text-gray-600 mb-6">
              Berikut adalah program kerja utama HME UNSRAT untuk periode kepengurusan 2024-2025:
            </p>

            <div className="space-y-3">
              {workPrograms.map((program, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className={`w-full flex items-center justify-between p-4 text-left font-medium focus:outline-none ${activeAccordion === program.id ? "bg-gray-50" : ""
                      }`}
                    onClick={() => toggleAccordion(program.id)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${index % 2 === 0 ? "bg-blue-600" : "bg-red-600"
                          }`}
                      >
                        {program.icon}
                      </div>
                      <span className="text-lg font-semibold">{program.title}</span>
                    </div>
                    {activeAccordion === program.id ? (
                      <FaArrowUp size={20} className="text-gray-600" />
                    ) : (
                      <FaArrowDown size={20} className="text-gray-600" />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${activeAccordion === program.id ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <ul className="space-y-3">
                        {program.programs.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex">
                            <i className="bi bi-check-circle-fill text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                            <div>
                              <h6 className="font-medium">{item.name}</h6>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
