import '/styles/globals.css';
import '/node_modules/normalize.css';
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
        <html lang='ru'>
            <body className={font.className}>{children}</body>
        </html>
    );
}
