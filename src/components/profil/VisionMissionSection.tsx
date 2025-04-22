import { FaList } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5"
import { FaCheckSquare } from "react-icons/fa";

export default function VisionMissionSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 relative">
          Visi & Misi
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <IoEyeOutline className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visi</h3>
              <p className="text-gray-600">
                Menjadikan Himpunan Mahasiswa Elektro UNSRAT sebagai organisasi kemahasiswaan yang unggul, profesional,
                dan berkontribusi dalam pengembangan ilmu pengetahuan dan teknologi di bidang teknik elektro untuk
                kemajuan bangsa dan negara.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <FaList className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Misi</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-start">
                  <FaCheckSquare className="text-blue-600 mr-2" />
                  <span>Meningkatkan kualitas akademik dan soft skill mahasiswa Teknik Elektro</span>
                </li>
                <li className="flex items-start">
                  <FaCheckSquare className="text-blue-600 mr-2" />
                  <span>Mengembangkan jiwa kepemimpinan, kreativitas, dan inovasi mahasiswa</span>
                </li>
                <li className="flex items-start">
                  <FaCheckSquare className="text-blue-600 mr-2" />
                  <span>Membangun kerjasama dengan berbagai pihak untuk pengembangan organisasi</span>
                </li>
                <li className="flex items-start">
                  <FaCheckSquare className="text-blue-600 mr-2" />
                  <span>Berkontribusi dalam penerapan ilmu teknik elektro untuk masyarakat</span>
                </li>
                <li className="flex items-start">
                  <FaCheckSquare className="text-blue-600 mr-2" />
                  <span>Menjaga dan meningkatkan solidaritas antar mahasiswa Teknik Elektro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
