import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { username, password } = await req.json();
    const data = {
        username,
        password
    };


    const response = NextResponse.json({ success: true , data});


    response.cookies.set("session", "fake-session-token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;

}

