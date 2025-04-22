"use client"

import Link from "next/link"
import { useState } from "react"
import { BsChatDotsFill, BsChevronBarDown, BsChevronBarUp } from "react-icons/bs";

export default function FaqSection() {
  const [activeItem, setActiveItem] = useState("collapseOne")

  const faqs = [
    {
      id: "collapseOne",
      question: "Bagaimana cara bergabung dengan HME UNSRAT?",
      answer:
        "Semua mahasiswa aktif Program Studi Teknik Elektro Universitas Sam Ratulangi akan diberi kesempatan untuk mengikuti pendaftaran anggota baru, Anda dapat mengikuti proses rekrutmen yang biasanya diadakan setiap awal semester ganjil.",
    },
    {
      id: "collapseTwo",
      question: "Apa saja kegiatan rutin yang diselenggarakan oleh HME UNSRAT?",
      answer: (
        <>
          <p className="mb-2">HME UNSRAT menyelenggarakan berbagai kegiatan rutin seperti:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Elektro Competition (kompetisi tahunan)</li>
            <li>Seminar dan workshop teknis</li>
            <li>Program mentoring akademik</li>
            <li>Kegiatan pengabdian masyarakat</li>
            <li>Pelatihan soft skill dan kepemimpinan</li>
            <li>Hari Ulang Tahun HME</li>
          </ul>
        </>
      ),
    },
    {
      id: "collapseThree",
      question: "Bagaimana cara mengajukan proposal kegiatan atau kerjasama dengan HME UNSRAT?",
      answer:
        "Untuk mengajukan proposal kegiatan atau kerjasama, Anda dapat menghubungi langsung pengurus HME melalui instagram yang tersedia di website ini. Kamu juga bisa datang langsung ke sekretariat Himpunan Mahasiswa Elektro. Proposal akan diproses dan ditindaklanjuti oleh bidang yang relevan.",
    },
    {
      id: "collapseFour",
      question: "Apakah HME UNSRAT menyediakan fasilitas untuk mahasiswa Teknik Elektro?",
      answer: (
        <>
          <p className="mb-2">
            Ya, HME UNSRAT menyediakan beberapa fasilitas untuk mahasiswa Teknik Elektro, antara lain:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sekretariat HME yang dapat digunakan untuk kegiatan mahasiswa</li>
            <li>Perpustakaan mini dengan koleksi buku teknik elektro</li>
            <li>Akses ke jaringan alumni untuk keperluan magang dan karir</li>
            <li>Informasi beasiswa dan kompetisi</li>
            <li>Pendampingan akademik dan non-akademik</li>
          </ul>
        </>
      ),
    },
    {
      id: "collapseFive",
      question: "Bagaimana cara mendapatkan informasi terbaru tentang kegiatan HME UNSRAT?",
      answer: (
        <>
          <p className="mb-2">Anda dapat memperoleh informasi terbaru tentang kegiatan HME UNSRAT melalui:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Website resmi HME UNSRAT</li>
            <li>Media sosial HME (Instagram, Facebook, Tiktok)</li>
            <li>Grup WhatsApp angkatan</li>
            <li>Papan pengumuman di sekretariat HME</li>
          </ul>
        </>
      ),
    },
  ]

  const toggleAccordion = (id: string) => {
    setActiveItem(id === activeItem ? "" : id)
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 relative">
          Pertanyaan Umum
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className={`w-full text-left p-4 font-medium text-gray-800 focus:outline-none flex justify-between items-center ${activeItem === faq.id ? "bg-gray-50" : ""
                    }`}
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span>{faq.question}</span>
                  {activeItem === faq.id ? (
                    <BsChevronBarUp className="text-blue-600 transition-transform" />
                  ) : (
                    <BsChevronBarDown className="text-blue-600 transition-transform" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeItem === faq.id ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <div className="p-4 border-t border-gray-200 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Masih punya pertanyaan lain? Jangan ragu untuk menghubungi kami.</p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
            >
              <BsChatDotsFill size={20} className="text-white" />
              Tanyakan Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
