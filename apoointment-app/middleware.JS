// middleware.js
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request) {
        const response = NextResponse.next();

        // إعداد cookies للعمل عبر نطاقات vercel
        response.cookies.set({
            name: 'kinde_auth',
            value: request.cookies.get('kinde_auth')?.value || '',
            secure: true,
            sameSite: 'none',
            domain: '.vercel.app', // 🔥 مهم للنطاقات الفرعية
            path: '/',
            httpOnly: true
        });

        return response;
    }
);

export const config = {
    matcher: ['/api/auth/:path*']
};