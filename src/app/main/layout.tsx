// app/main/layout.tsx
import type { ReactNode } from 'react'
import Navbar from '@/shared/Navbar'
import Footer from '@/shared/Footer'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
