import { BsAirplaneFill, BsGeoAltFill, BsSignpostFill } from "react-icons/bs";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function LocationMap() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Lokasi Kami</h2>
      <div className="flex justify-center mb-8">
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded"></div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="relative h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.523871750241!2d124.82291907447188!3d1.4595373612145006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjcnMzQuMyJOIDEyNMKwNDknMzEuOCJF!5e0!3m2!1sid!2sid!4v1744204073057!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0"
          ></iframe>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <BsSignpostFill className="text-gray-600" size={25} />
            </div>
            <h3 className="text-xl font-semibold">Petunjuk Arah</h3>
          </div>

          <ul className="space-y-4">
            <li className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                  <BsAirplaneFill className="text-blue-600" size={20} />
                </div>
              </div>
              <div>
                <p className="font-medium">Dari Bandara Sam Ratulangi:</p>
                <p className="text-gray-600">40 menit berkendara (20 km)</p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                  <BsGeoAltFill className="text-blue-600" size={20} />
                </div>
              </div>
              <div>
                <p className="font-medium">Dari Tugu Zero Point:</p>
                <p className="text-gray-600">10 menit berkendara (5 km)</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-1 rounded-full flex items-center justify-center mr-3">
              <FaClock className="text-gray-600" size={25} />
            </div>
            <h3 className="text-xl font-semibold">Jam Operasional</h3>
          </div>

          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-blue-600">
                  <FaCalendarAlt className="text-blue-600" size={20} />
                </div>
                <p className="font-medium">Senin - Jumat</p>
              </div>
              <p className="text-gray-600">08:00 - 16:00 WITA</p>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-blue-600">
                  <FaCalendarAlt className="text-blue-600" size={20} />
                </div>
                <p className="font-medium">Sabtu - Minggu & Hari Libur</p>
              </div>
              <p className="text-gray-600">Tutup</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
