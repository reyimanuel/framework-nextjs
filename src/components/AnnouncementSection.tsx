import Link from "next/link"

export default function AnnouncementSection() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-red-600 text-white rounded-lg shadow-md p-4 flex items-start">
              <div className="flex-shrink-0 mr-4">
                <i className="bi bi-megaphone-fill text-3xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Pengumuman Penting!</h4>
                <p className="mb-2">
                  Pendaftaran Elektro Competition 2025 telah dibuka! Segera daftarkan tim kamu sebelum 30 April 2025.
                </p>
                <Link
                  href="/kegiatan"
                  className="inline-block text-white hover:text-gray-200 underline font-medium transition-colors"
                >
                  Klik di sini untuk informasi lebih lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
