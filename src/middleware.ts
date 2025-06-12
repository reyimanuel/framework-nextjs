// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify, importSPKI } from "jose";

// Ambil kunci mentah dari environment variable
const publicKeyPEM = process.env.JWT_PUBLIC_KEY!;

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("access_token")?.value;

    if (request.nextUrl.pathname.startsWith("/admin/auth")) {
        return NextResponse.next();
    }

    if (!token) {
        const loginUrl = new URL("/admin/auth/login", request.url);
        return NextResponse.redirect(loginUrl);
    }

    try {
        // ## INI PERUBAHANNYA ##
        // Format ulang string kunci untuk memastikan newline terbaca dengan benar
        const formattedPublicKey = publicKeyPEM.replace(/\\n/g, "\n");

        const publicKey = await importSPKI(formattedPublicKey, "RS256");

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
    matcher: ["/admin/((?!auth).*)"],
};