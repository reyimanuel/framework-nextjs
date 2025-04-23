import Image from "next/image"

interface AuthHeaderProps {
  title: string
  subtitle?: string
}

export default function AuthHeader({ title, subtitle = "Himpunan Mahasiswa Elektro UNSRAT" }: AuthHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-red-700 p-6 text-center">
      <div className="flex justify-center mb-3">
        <Image src="/logo/HME.png" alt="HME Logo" width={80} height={80} className="rounded-full bg-white p-1" />
      </div>
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      {subtitle && <p className="text-white/90">{subtitle}</p>}
    </div>
  )
}
