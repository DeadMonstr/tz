import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const authed = Boolean(req.cookies.get("session")?.value);

    if (!authed) {
        const url = req.nextUrl.clone();
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/platform/:path*"],
};