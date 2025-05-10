"use client"

import { useState } from "react"
import Link from "next/link"
import { BsChatDotsFill, BsChevronBarDown, BsChevronBarUp } from "react-icons/bs"

export default function FaqSection() {
  const [activeAccordion, setActiveAccordion] = useState("collapseOne")

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id)
  }

  const faqs = [
    {
      id: "collapseOne",
      question: "Bagaimana cara mendaftar kegiatan HME?",
      answer:
        "Untuk mendaftar kegiatan HME, Anda dapat mengisi formulir pendaftaran yang tersedia di website ini atau menghubungi panitia melalui kontak yang tertera pada detail kegiatan. Setiap kegiatan memiliki prosedur pendaftaran yang mungkin berbeda, jadi pastikan untuk membaca detail kegiatan dengan seksama.",
    },
    {
      id: "collapseTwo",
      question: "Apakah kegiatan HME terbuka untuk umum?",
      answer:
        "Sebagian besar kegiatan HME seperti seminar, workshop, dan kompetisi terbuka untuk umum. Namun, beberapa kegiatan mungkin dikhususkan untuk mahasiswa Teknik Elektro atau mahasiswa UNSRAT. Informasi mengenai target peserta akan dicantumkan pada detail kegiatan.",
    },
    {
      id: "collapseThree",
      question: "Apakah ada biaya untuk mengikuti kegiatan HME?",
      answer:
        "Beberapa kegiatan HME bersifat gratis, sementara yang lain mungkin memerlukan biaya pendaftaran. Biaya ini biasanya digunakan untuk keperluan operasional kegiatan, sertifikat, konsumsi, dan materi. Informasi mengenai biaya pendaftaran akan dicantumkan pada detail kegiatan.",
    },
    {
      id: "collapseFour",
      question: "Bagaimana cara mendapatkan sertifikat kegiatan?",
      answer:
        "Sertifikat kegiatan biasanya diberikan kepada peserta yang telah mengikuti kegiatan sesuai dengan ketentuan yang berlaku. Sertifikat dapat diberikan dalam bentuk fisik pada akhir kegiatan atau dikirimkan melalui email dalam bentuk digital. Informasi mengenai sertifikat akan disampaikan oleh panitia pada saat kegiatan berlangsung.",
    },
    {
      id: "collapseFive",
      question: "Bagaimana cara berkolaborasi atau menjadi sponsor kegiatan HME?",
      answer:
        "Untuk berkolaborasi atau menjadi sponsor kegiatan HME, Anda dapat menghubungi kami melalui email di hme@unsrat.ac.id atau melalui halaman kontak di website ini. Tim kami akan menghubungi Anda untuk mendiskusikan detail kerjasama yang dapat dilakukan.",
    },
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Pertanyaan Umum
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className={`w-full text-left p-4 font-medium text-gray-800 focus:outline-none flex justify-between items-center ${activeAccordion === faq.id ? "bg-gray-50" : ""
                    }`}
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span>{faq.question}</span>
                  {activeAccordion === faq.id ? (
                    <BsChevronBarUp className="text-blue-600 transition-transform" />
                  ) : (
                    <BsChevronBarDown className="text-blue-600 transition-transform" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeAccordion === faq.id ? "max-h-96" : "max-h-0"
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
