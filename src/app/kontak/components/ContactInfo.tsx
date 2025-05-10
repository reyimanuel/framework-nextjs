import React from "react"
import { BsFillGeoAltFill } from "react-icons/bs"
import { CiMap } from "react-icons/ci"
import { FaInstagramSquare } from "react-icons/fa"

export default function ContactInfo() {
  const contact = [
    {
      title: "Alamat",
      icon: <BsFillGeoAltFill className="text-blue-600" size={28} />,
      content: (
        <>
          <p className="text-center mb-1">Fakultas Teknik Universitas Sam Ratulangi</p>
          <p className="text-center mb-1">Jl. Kampus Unsrat, Bahu, Kec. Malalayang</p>
          <p className="text-center mb-4">Kota Manado, Sulawesi Utara 95115</p>
          <div className="flex justify-center">
            <a
             href="https://maps.app.goo.gl/QYk5ZuKubNYWVTmp9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-300 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <CiMap className="mr-2" />
              Lihat di Peta
            </a>
          </div>
        </>
      )
    },
    {
      title: "Instagram",
      icon: <FaInstagramSquare className="text-blue-600" size={28} />,
      content: (
        <>
          <p className="text-center text-blue-600 font-medium mb-4">@hmeftunsrat</p>
          <p className="text-center">
            Ikuti kami di Instagram untuk mendapatkan informasi terbaru tentang kegiatan dan acara HME UNSRAT.
          </p>
        </>
      )
    }
  ]

  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row gap-6">
        {contact.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 w-full md:w-[400px]">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
              <div className="w-full">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
