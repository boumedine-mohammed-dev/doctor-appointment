// app/emails/WelcomeEmail.jsx
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Heading } from '@react-email/heading';

export default function WelcomeEmail({ name }) {
    return (
        <Html lang="ar">
            <Heading>مرحبًا {name}</Heading>
            <Text>شكرًا لانضمامك إلى تطبيقنا.</Text>
        </Html>
    );
}
