"use client"

import { useState } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

export default function ChairpersonHistorySection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const chairpersonHistory = [
    [
      { period: "1993-1995", name: "Arie Lumenta, S.T, M.T" },
      { period: "1995-1997", name: "Hendrik Daniel, S.T" },
      { period: "1997-2001", name: "Steven Pondaag, S.T" },
      { period: "2001-2003", name: "Mario O. Rira, S.T" },
      { period: "2003-2004", name: "Hery Ludong, S.T" },
    ],
    [
      { period: "2004-2005", name: "Franky Karamoy, S.T" },
      { period: "2005-2006", name: "Yorry R. Wowor, S.T" },
      { period: "2006-2007", name: "Mario E. Poli, S.T" },
      { period: "2007-2008", name: "Reinaldo S. Paiman, S.T" },
      { period: "2008-2009", name: "Julian Sahertian, S.T" },
    ],
    [
      { period: "2009-2010", name: "Tepianus Madira, S.T" },
      { period: "2010-2011", name: "Freka Rumagit, S.T" },
      { period: "2011-2012", name: "Samuel Y. Dimpudus, S.T" },
      { period: "2012-2014", name: "Allen Jostein, S.T" },
      { period: "2014-2016", name: "Renaldi P. Luntungan, S.T" },
    ],
    [
      { period: "2016-2017", name: "Frangklin T. Radjagukguk, S.T" },
      { period: "2017-2018", name: "Exel Defrisko Tarkus, S.Kom" },
      { period: "2018-2020", name: "Mulky Mario, S.Kom" },
      { period: "2020-2022", name: "Josua Sondakh, S.Kom" },
      { period: "2022-2023", name: "Ruth Lilian Watimena, S.Kom" },
    ],
    [{ period: "2023-Sekarang", name: "Neoville Tajujung" }],
  ]

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? chairpersonHistory.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveSlide((prev) => (prev === chairpersonHistory.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 relative">
          Sejarah Ketua HME UNSRAT
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
            {chairpersonHistory[activeSlide].map((chairperson, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 h-full">
                <div className="text-center h-full flex flex-col justify-between">
                  <p className="text-sm text-gray-500 mb-2">{chairperson.period}</p>
                  <h3 className="font-medium text-gray-800">{chairperson.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Previous"
            >
              <BsArrowLeft className="size-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Next"
            >
              <BsArrowRight className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
