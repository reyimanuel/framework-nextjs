import Image from "next/image"
import Link from "next/link"
import { FaTiktok, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0057] text-white py-3">
      <div className="container mx-auto px-4 -py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-3">
              <Image
                src="/logo/HME.png"
                alt="HME Logo"
                className="rounded-full bg-white p-1"
                width={40}
                height={40}
              />
              <span className="ml-2 font-bold text-lg">HME UNSRAT</span>
            </div>
            <p className="text-sm text-center md:text-left mb-4">
              Himpunan Mahasiswa Teknik Elektro
              <br />
              Fakultas Teknik Universitas Sam Ratulangi
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/HME2011.Unsrat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaFacebook className="text-white"/>
              </a>
              <a
                href="https://www.instagram.com/hmeftunsrat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaInstagram className="text-white"/>
              </a>
              <a
                href="https://www.tiktok.com/@hmeftunsrat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaTiktok className="text-white"/>
              </a>
              <a
                href="https://www.linkedin.com/company/himpunan-mahasiswa-elektro-ft-unsrat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaLinkedin className="text-white"/>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-sm mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline hover:text-gray-300 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:underline hover:text-gray-300 transition-colors">
                  Profil
                </Link>
              </li>
              <li>
                <Link href="/kepengurusan" className="hover:underline hover:text-gray-300 transition-colors">
                  Kepengurusan
                </Link>
              </li>
              <li>
                <Link href="/kegiatan" className="hover:underline hover:text-gray-300 transition-colors">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:underline hover:text-gray-300 transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:underline hover:text-gray-300 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>


          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Berlangganan</h3>
            <p className="text-sm mb-4">Dapatkan informasi terbaru dari HME</p>
            <form className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Email anda"
                className="px-3 py-2 text-gray-800 rounded-l-md w-full focus:outline-none bg-white"
              />
              <button type="submit" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors">
                Langganan
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 HME UNSRAT. All rights reserved.</p>
          <p className="text-sm flex items-center">
            Designed with <span className="text-red-500 mx-1">❤</span> by HME IT Team
          </p>
        </div>
      </div>
    </footer>
  )
}
