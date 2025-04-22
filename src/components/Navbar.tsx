"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose, IoIosInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BiCalendarEvent } from "react-icons/bi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#0a0057] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/HME.png"
              alt="HME Logo"
              className="inline-block mr-2 rounded-full"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg">HME UNSRAT</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleNavbar}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <IoMdClose className="h-8 w-8" />
              ) : (
                <RxHamburgerMenu className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link
              href="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/main") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <IoHomeOutline className="h-6 w-6" />
              Beranda
            </Link>
            <Link
              href="/profil"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/profil") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <IoIosInformationCircleOutline className="h-6 w-6" />
              Profil
            </Link>
            <Link
              href="/kepengurusan"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/kepengurusan") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <HiOutlineUserGroup className="h-6 w-6" />
              Kepengurusan
            </Link>
            <Link
              href="/kegiatan"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/kegiatan") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <BiCalendarEvent className="h-6 w-6" />
              Kegiatan
            </Link>
            <Link
              href="/galeri"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/galeri") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <MdOutlinePhotoLibrary className="h-6 w-6" />
              Galeri
            </Link>
            <Link
              href="/kontak"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/kontak") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <FaRegEnvelope className="h-6 w-6" />
              Kontak
            </Link>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/main") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>

              Beranda
            </Link>
            <Link
              href="/profil"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/profil") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>

              Profil
            </Link>
            <Link
              href="/kepengurusan"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/kepengurusan") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>

              Kepengurusan
            </Link>
            <Link
              href="/kegiatan"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/kegiatan") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>

              Kegiatan
            </Link>
            <Link
              href="/galeri"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/galeri") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>

              Galeri
            </Link>
            <Link
              href="/kontak"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors ${pathname.includes("/kontak") ? "bg-blue-800 text-white" : "text-gray-200"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
