import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Here you would typically send an email or store the contact form data
    // For now, we'll just log it and return a success response
    console.log("Contact form submission:", { name, email, subject, message })

    return NextResponse.json({ message: "Pesan berhasil dikirim!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ message: "Terjadi kesalahan saat mengirim pesan." }, { status: 500 })
  }
}
