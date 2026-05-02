import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export const proxy = async (request) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const loggedIn = !!session;

    if (!loggedIn) {
        const loginUrl = new URL("/login", request.url);

        // ✅ save previous page
        loginUrl.searchParams.set(
            "callbackUrl",
            request.nextUrl.pathname
        );

        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
};

export const config = {
    matcher: ["/about", "/career", "/news/:path*"],
};