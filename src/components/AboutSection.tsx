import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          Tentang Kami
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/main/about.png"
              alt="Tentang HME"
              className="w-full h-auto rounded-lg shadow-md"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg font-medium text-gray-700 mb-4">
              Himpunan Mahasiswa Elektro (HME) merupakan organisasi kemahasiswaan di bawah Fakultas Teknik Universitas
              Sam Ratulangi yang menjadi wadah aspirasi, pengembangan, dan pemberdayaan mahasiswa Teknik Elektro.
            </p>
            <p className="text-gray-600 mb-6">
              Kami berkomitmen untuk menciptakan lingkungan yang kondusif bagi mahasiswa dalam mengembangkan potensi
              akademik, inovasi teknologi, serta pengabdian kepada masyarakat.
            </p>
            <Link
              href="/profil"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
