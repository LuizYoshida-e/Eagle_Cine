import { NextRequest, NextResponse } from "next/server";


export default function Proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathname === "/pt-BR" || pathname.startsWith("/pt-BR/")) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/pt-BR", request.url));
}
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
} 