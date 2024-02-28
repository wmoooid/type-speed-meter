import '/styles/globals.css';
import '/node_modules/normalize.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Проверь скорость печати',
    description: 'Сервис для проверки скорости печати',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='ru'>
            <body>{children}</body>
        </html>
    );
}
