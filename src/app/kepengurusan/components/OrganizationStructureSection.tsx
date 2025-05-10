export default function OrganizationStructureSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">Struktur Organisasi</h2>
          <div className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
            Periode 2024-2025
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Level 1: Ketua */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-blue-800 text-white rounded-lg p-4 text-center shadow-md">
                <h4 className="font-bold mb-1">Ketua Umum</h4>
                <p className="text-white/90">Neoville Tajujung</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-blue-800"></div>
            </div>

            {/* Level 2: Wakil Ketua */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-red-600 text-white rounded-lg p-4 text-center shadow-md">
                <h4 className="font-bold mb-1">Wakil Ketua Umum</h4>
                <p className="text-white/90">Julio Roring</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-blue-800"></div>
            </div>

            {/* Level 3: Sekretaris & Bendahara */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <h5 className="font-bold mb-1">Sekretaris</h5>
                <p className="text-gray-600">Sydney Pesiwarissa</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <h5 className="font-bold mb-1">Bendahara</h5>
                <p className="text-gray-600">Micha Wungow</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-blue-800"></div>
            </div>

            {/* Level 4: Wakil Sekretaris & Wakil Bendahara */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <h5 className="font-bold mb-1">Wakil Sekretaris</h5>
                <p className="text-gray-600">Diendels Saryono</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <h5 className="font-bold mb-1">Wakil Bendahara</h5>
                <p className="text-gray-600">Yuan Mantiri</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-blue-800"></div>
            </div>

            {/* Level 5: Koordinator Bidang */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <h6 className="font-bold mb-1">Bidang Bursa & Pendanaan</h6>
                <p className="text-gray-600 text-sm">Brando Mende</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <h6 className="font-bold mb-1">Bidang Umum & Sarana Prasarana</h6>
                <p className="text-gray-600 text-sm">Michelle Wowor</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <h6 className="font-bold mb-1">Bidang Humas & Kemitraan</h6>
                <p className="text-gray-600 text-sm">Marfo Kapoh</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <h6 className="font-bold mb-1">Bidang Kesejahteraan Mahasiswa</h6>
                <p className="text-gray-600 text-sm">Merfy Turang</p>
              </div>
            </div>

            {/* Level 6: Koordinator Bidang Lainnya */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <h6 className="font-bold mb-1">Bidang Keilmuwan & Penalaran</h6>
                <p className="text-gray-600 text-sm">Gabriel Sompotan</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <h6 className="font-bold mb-1">Bidang Minat & Bakat</h6>
                <p className="text-gray-600 text-sm">Josua Sendow</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <h6 className="font-bold mb-1">Bidang Kerohanian</h6>
                <p className="text-gray-600 text-sm">Amanda Anang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
