// app/api/auth/[kinde_auth]/route.js
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth({
    authRouter: {
        cookieOptions: {
            secure: true,
            sameSite: 'none',
            domain: '.vercel.app', // 🔥 هذا هو المفتاح!
            path: '/',
            httpOnly: true,
            maxAge: 60 * 10 // 10 دقائق
        }
    }
});