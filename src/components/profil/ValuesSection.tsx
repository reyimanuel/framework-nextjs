import {BsStars, BsPeopleFill, BsLightbulbFill, BsGraphUpArrow, BsHeartFill, BsAwardFill,} from "react-icons/bs"

export default function ValuesSection() {
  const values = [
    {
      title: "Integritas",
      icon: <BsStars size={28} className="text-white" />,
      color: "blue",
      description: "Menjunjung tinggi kejujuran, tanggung jawab, dan konsistensi dalam setiap tindakan dan keputusan.",
    },
    {
      title: "Kolaborasi",
      icon: <BsPeopleFill size={28} className="text-white" />,
      color: "red",
      description: "Mengutamakan kerjasama tim, saling menghargai, dan bersinergi untuk mencapai tujuan bersama.",
    },
    {
      title: "Inovasi",
      icon: <BsLightbulbFill size={28} className="text-white" />,
      color: "blue",
      description: "Selalu berusaha mengembangkan ide-ide baru dan solusi kreatif dalam menghadapi tantangan.",
    },
    {
      title: "Profesionalisme",
      icon: <BsGraphUpArrow size={28} className="text-white" />,
      color: "red",
      description: "Bekerja dengan standar kualitas tinggi, disiplin, dan komitmen untuk memberikan yang terbaik.",
    },
    {
      title: "Kepedulian",
      icon: <BsHeartFill size={28} className="text-white" />,
      color: "blue",
      description: "Memiliki kepekaan dan empati terhadap sesama serta lingkungan sekitar.",
    },
    {
      title: "Keunggulan",
      icon: <BsAwardFill size={28} className="text-white" />,
      color: "red",
      description: "Berusaha untuk selalu memberikan hasil terbaik dan terus meningkatkan kualitas diri.",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 relative">
          Nilai-Nilai Organisasi
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${value.color === "red" ? "bg-red-600" : "bg-blue-600"
                  }`}
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
