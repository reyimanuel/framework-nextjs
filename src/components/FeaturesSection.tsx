import Link from "next/link"
import { BsFillMortarboardFill, BsStars} from "react-icons/bs";
import { FaTrophy, FaPeopleCarry} from "react-icons/fa";

export default function FeaturesSection() {
  const categories = [
    {
      title: "Akademik",
      icon: <BsFillMortarboardFill size={28} className="text-white" />, 
      color: "red",
      description: "Seminar, workshop, dan pelatihan untuk meningkatkan kemampuan akademik mahasiswa.",
      link: "/kegiatan/#akademik",
    },
    {
      title: "Kompetisi",
      icon: <FaTrophy size={28} className="text-white" />,
      color: "blue",
      description: "Berbagai kompetisi di bidang teknik elektro baik tingkat lokal maupun nasional.",
      link: "/kegiatan/#kompetisi",
    },
    {
      title: "Pengabdian",
      icon: <FaPeopleCarry size={28} className="text-white" />,
      color: "red",
      description: "Kegiatan pengabdian masyarakat dan penerapan ilmu teknik elektro di masyarakat.",
      link: "/kegiatan/#pengabdian",
    },
    {
      title: "Keorganisasian",
      icon: <BsStars size={28} className="text-white" />,
      color: "blue",
      description: "Kegiatan internal organisasi seperti rapat, musyawarah, dan kegiatan keakraban.",
      link: "/kegiatan/#keorganisasian",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Kategori Kegiatan
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6 text-center">
                <div
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    category.color === "red" ? "bg-red-600" : "bg-blue-600"
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-5">{category.description}</p>
                <Link
                  href={category.link}
                  className={`inline-block px-4 py-2 border rounded-md font-medium transition-colors ${
                    category.color === "red"
                      ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  Lihat Kegiatan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
