import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth({
    authRouter: {
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            domain: process.env.NODE_ENV === 'production' ? '.vercel.app' : undefined
        }
    },

    async callback(request, response) {
        try {
            console.log('🔵 Auth callback initiated');
            const result = await handleAuth.callback(request, response);
            console.log('✅ Auth callback successful');
            return result;
        } catch (error) {
            console.error('❌ Auth callback error:', error.message);

            if (error.message.includes('State not found')) {
                const redirectUrl = new URL('/api/auth/login', process.env.KINDE_SITE_URL);
                redirectUrl.searchParams.set('error', 'session_expired');

                const response = Response.redirect(redirectUrl.toString());
                response.headers.append(
                    'Set-Cookie',
                    'kinde_auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=None'
                );

                return response;
            }
            throw error;
        }
    }
});