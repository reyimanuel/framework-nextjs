// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify, importSPKI } from "jose";

// 1. Impor kunci publik dari environment variable
const publicKeyPEM = process.env.JWT_PUBLIC_KEY!;

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("access_token")?.value;

    if (request.nextUrl.pathname.startsWith("/admin/auth/login")) {
        return NextResponse.next();
    }

    if (!token) {
        const loginUrl = new URL("/admin/auth/login", request.url);
        return NextResponse.redirect(loginUrl);
    }

    try {
        // 2. Buat kunci yang dapat digunakan dari string PEM
        const publicKey = await importSPKI(publicKeyPEM, "RS256"); // Ganti "RS256" jika backend Anda menggunakan algoritma lain

        // 3. Verifikasi token menggunakan kunci publik
        await jwtVerify(token, publicKey);

        return NextResponse.next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        const loginUrl = new URL("/admin/auth/login", request.url);
        const response = NextResponse.redirect(loginUrl);
        response.cookies.set("access_token", "", { maxAge: -1 });
        return response;
    }
}

export const config = {
    /*
     * Cocokkan semua path di bawah /admin, KECUALI yang ada di bawah /admin/auth.
     * Ini akan melindungi dashboard, galeri, dll., tetapi membiarkan
     * halaman login dan registrasi dapat diakses oleh semua orang.
     */
    matcher: ["/admin/((?!auth).*)"],
};