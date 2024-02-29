import 'normalize.css';
import '/styles/globals.css';
import Header from '@/modules/header';
import Footer from '@/modules/footer';
import { Noto_Sans_Mono } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Проверь скорость печати',
    description: 'Сервис для проверки скорости печати',
};

const font = Noto_Sans_Mono({
    subsets: ['cyrillic'],
    display: 'swap',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='ru' className={font.className}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
