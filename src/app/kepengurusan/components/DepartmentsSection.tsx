import { BsCashCoin, BsTools  } from "react-icons/bs";
import { BsFillMortarboardFill,} from "react-icons/bs";
import { FaTrophy, FaPeopleCarry,} from "react-icons/fa";
import { FaHandsPraying, FaPeopleGroup } from "react-icons/fa6";

export default function DepartmentsSection() {
  const departments = [
    {
      name: "Bidang Keilmuwan & Penalaran",
      icon: <BsFillMortarboardFill />,
      color: "red",
      description: "Bertanggung jawab untuk meningkatkan kualitas akademik dan penalaran mahasiswa.",
      members: [
        { name: "Gabriel Sompotan", role: "Koordinator" },
        { name: "Stefiano Kalumata", role: "Anggota" },
        { name: "Deo Lolowang", role: "Anggota" },
        { name: "Mikhael Wahani", role: "Anggota" },
        { name: "Timotius Kamal", role: "Anggota" },
        { name: "Michyta Bawata", role: "Anggota" },
        { name: "Aiken Suoth", role: "Anggota" },
        { name: "Veronica Waeo", role: "Anggota" },
        { name: "Albert Mangiri", role: "Anggota" },
      ],
    },
    {
      name: "Bidang Minat & Bakat",
      icon: <FaTrophy />,
      color: "blue",
      description: "Fokus pada pengembangan minat dan bakat mahasiswa di luar kegiatan akademik.",
      members: [
        { name: "Josua Sendow", role: "Koordinator" },
        { name: "Viero Lumendek", role: "Anggota" },
        { name: "Michael Sumampow", role: "Anggota" },
        { name: "Matthew Lepar", role: "Anggota" },
        { name: "Zefanya Massie", role: "Anggota" },
        { name: "Anugrah Putong", role: "Anggota" },
        { name: "La Ode Arya Hardiansyah", role: "Anggota" },
        { name: "Ravael Suwatalbessy", role: "Anggota" },
        { name: "Alfrido Watung", role: "Anggota" },
      ],
    },
    {
      name: "Bidang Kesejahteraan Mahasiswa",
      icon: <FaPeopleGroup />,
      color: "red",
      description: "Bertanggung jawab untuk meningkatkan kesejahteraan dan kualitas hidup mahasiswa.",
      members: [
        { name: "Merfy Turang", role: "Koordinator" },
        { name: "Florence Lowing", role: "Anggota" },
        { name: "Gloria Mokalu", role: "Anggota" },
        { name: "Kezia Poluakan", role: "Anggota" },
        { name: "Andersen Pontoh", role: "Anggota" },
        { name: "Galang Lawendatu", role: "Anggota" },
        { name: "Yosua Mawati", role: "Anggota" },
        { name: "Yeremia Turangan", role: "Anggota" },
        { name: "Don Bosco Bororing", role: "Anggota" },
      ],
    },
    {
      name: "Bidang Umum & Sarana Prasarana",
      icon: <BsTools />,
      color: "blue",
      description: "Bertanggung jawab untuk mengelola sarana prasarana dan kebutuhan umum organisasi.",
      members: [
        { name: "Michelle Wowor", role: "Koordinator" },
        { name: "Novenia Wowor", role: "Anggota" },
        { name: "Andini Nongka", role: "Anggota" },
        { name: "Heavenly Mewengkang", role: "Anggota" },
        { name: "Winston Gigir", role: "Anggota" },
        { name: "Yosua Mongdong", role: "Anggota" },
        { name: "Vannes Sampel", role: "Anggota" },
        { name: "Yngwie Lumendek", role: "Anggota" },
      ],
    },
    {
      name: "Bidang Bursa & Pendanaan",
      icon: <BsCashCoin />,
      color: "red",
      description: "Bertanggung jawab untuk mengelola sumber pendanaan dan kegiatan usaha organisasi.",
      members: [
        { name: "Brando Mende", role: "Koordinator" },
        { name: "Evita Tawaang", role: "Anggota" },
        { name: "Zefanya Palit", role: "Anggota" },
        { name: "Irghy Kelung", role: "Anggota" },
        { name: "Brain Sumual", role: "Anggota" },
        { name: "Alfani Pantalo", role: "Anggota" },
        { name: "Reyors Gonggalang", role: "Anggota" },
        { name: "Imanuel Sengkey", role: "Anggota" },
      ],
    },
    {
      name: "Bidang Kerohanian",
      icon: <FaHandsPraying />,
      color: "blue",
      description: "Bertanggung jawab untuk kegiatan kerohanian dan pengembangan spiritual mahasiswa.",
      members: [
        { name: "Amanda Anang", role: "Koordinator" },
        { name: "Alexander Namoda", role: "Anggota" },
        { name: "Rafly Langgohe", role: "Anggota" },
        { name: "Leandro Rumondor", role: "Anggota" },
        { name: "Try Setiawan", role: "Anggota" },
        { name: "Matthew Karamoy", role: "Anggota" },
        { name: "Jovanka Berhimpon", role: "Anggota" },
        { name: "Kenny Tulung", role: "Anggota" },
        { name: "Gabriel Rondonuwu", role: "Anggota" },
      ],
    },
    {
      name: "Bidang Humas & Kemitraan",
      icon: <FaPeopleCarry />,
      color: "red",
      description: "Mengelola komunikasi dan hubungan dengan pihak internal maupun eksternal organisasi.",
      members: [
        { name: "Marfo Kapoh", role: "Koordinator" },
        { name: "Bryliando Bagarai", role: "Anggota" },
        { name: "Febiola Lengkong", role: "Anggota" },
        { name: "Selviana Wulandari", role: "Anggota" },
        { name: "Natasya Paparang", role: "Anggota" },
        { name: "Euaggelion Lumintang", role: "Anggota" },
        { name: "Russel Rombepajung", role: "Anggota" },
        { name: "Andris Willem", role: "Anggota" },
        { name: "Rifky Umar", role: "Anggota" },
      ],
    },
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-10 relative">
          Anggota Bidang
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((department, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                    department.color === "red" ? "bg-red-600" : "bg-blue-600"
                  }`}
                >
                    <span className="text-white text-2xl">{department.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-center">{department.name}</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4 text-center">{department.description}</p>
              <div>
                <h6 className="font-semibold mb-2 text-gray-700">Anggota:</h6>
                <ul className="space-y-1">
                  {department.members.map((member, memberIndex) => (
                    <li key={memberIndex} className="text-sm border-b border-gray-100 pb-1 last:border-0">
                      {member.role === "Koordinator" ? (
                        <span className="font-medium text-blue-600">{member.name}</span>
                      ) : (
                        member.name
                      )}{" "}
                      <span className="text-gray-500 text-xs">- {member.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
