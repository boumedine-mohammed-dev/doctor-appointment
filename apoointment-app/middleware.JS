import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request) {
        const response = NextResponse.next();

        // تحسين إعدادات Cookies للاستخدام مع Vercel
        const authCookie = request.cookies.get('kinde_auth');
        if (authCookie) {
            response.cookies.set({
                name: 'kinde_auth',
                value: authCookie.value,
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
        }

        return response;
    },
    {
        cookies: {
            secure: true,
            sameSite: 'none'
        }
    }
);

export const config = {
    matcher: [
        '/api/auth/:path*',
        '/dashboard/:path*',
        '/profile/:path*'
    ]
};