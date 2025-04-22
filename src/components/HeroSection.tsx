import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-red-700 text-white min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/logo/HME.png"
            alt="HME Logo"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white p-1 mb-6 shadow-lg"
            width={180}
            height={180}
            priority
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Himpunan Mahasiswa Elektro</h1>
          <h2 className="text-xl md:text-2xl mb-4">Fakultas Teknik Universitas Sam Ratulangi</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Mewadahi aspirasi dan mengembangkan potensi mahasiswa Teknik Elektro
          </p>
        </div>
      </div>
    </section>
  )
}
