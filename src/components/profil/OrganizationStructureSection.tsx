import Link from "next/link"

export default function OrganizationStructureSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 relative">
          Struktur Organisasi
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-6 shadow-md">
          <div className="space-y-6">
            {/* Level 1 */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs bg-blue-600 text-white rounded-lg p-3 text-center">
                <h4 className="font-bold">Ketua HME</h4>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-blue-600"></div>
            </div>

            {/* Level 2 */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs bg-red-600 text-white rounded-lg p-3 text-center">
                <h4 className="font-bold">Wakil Ketua HME</h4>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-blue-600"></div>
            </div>

            {/* Level 3 - Sekretaris & Bendahara only */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white border border-blue-200 rounded-lg p-3 text-center shadow-sm">
                <h5 className="font-semibold">Sekretaris</h5>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-3 text-center shadow-sm">
                <h5 className="font-semibold">Bendahara</h5>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-blue-600"></div>
            </div>

            {/* Level 3.5 - Wakil Sekretaris & Wakil Bendahara */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white border border-blue-200 rounded-lg p-3 text-center shadow-sm">
                <h5 className="font-semibold">Wakil Sekretaris</h5>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-3 text-center shadow-sm">
                <h5 className="font-semibold">Wakil Bendahara</h5>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-blue-600"></div>
            </div>

            {/* Level 4 - Koordinator Bidang */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs bg-blue-100 border border-blue-300 rounded-lg p-3 text-center shadow-sm">
                <h5 className="font-semibold text-blue-800">Koordinator Bidang</h5>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-blue-600"></div>
            </div>

            {/* Level 5 - Departments */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="bg-white border border-blue-200 rounded-lg p-2 text-center shadow-sm">
                <h6 className="font-semibold text-sm">Bidang Akademik</h6>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-2 text-center shadow-sm">
                <h6 className="font-semibold text-sm">Bidang Minat & Bakat</h6>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-2 text-center shadow-sm">
                <h6 className="font-semibold text-sm">Bidang Humas</h6>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-2 text-center shadow-sm">
                <h6 className="font-semibold text-sm">Bidang Pengabdian</h6>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/kepengurusan"
              className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
            >
              Lihat Detail Kepengurusan
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
