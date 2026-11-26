import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./i18n/config";


export default function Proxy(request: NextRequest) {


    const pathname = request.nextUrl.pathname;

    const pathnameHasLocale = LOCALES.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    )

    if (pathnameHasLocale) return;

    if (request.nextUrl.pathname.startsWith('/posters')) {
        return NextResponse.next()
    }

    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`
    return NextResponse.redirect(url)


}
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
} 