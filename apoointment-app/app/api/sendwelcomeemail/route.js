// app/api/sendwelcomeemail/route.js
import { Resend } from 'resend';
import { render } from '@react-email/render';
import WelcomeEmail from '@/app/emails/WelcomeEmail'; // مسار صحيح

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const body = await req.json();
    const { email, name } = body;

    // ✅ استخدام render من @react-email/render فقط
    const emailHtml = render(<WelcomeEmail name={name || 'صديقنا'} />);
    console.log('Generated email HTML:', emailHtml);

    await resend.emails.send({
        from: 'Your App <onboarding@resend.dev>',
        to: email,
        subject: 'أهلًا بك!',
        react: <WelcomeEmail name={name || 'صديقنا'} />, // ✅ JSX هنا
    });


    return Response.json({ success: true });
}
