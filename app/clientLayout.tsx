// app/ClientLayout.tsx (Server Component - with metadata)
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Press_Start_2P } from 'next/font/google';
import React from 'react';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const pressStart2P = Press_Start_2P({
    variable: '--font-press-start-2p',
    subsets: ['latin'],
    weight: '400',
});

export const metadata: Metadata = {
    title: 'Oak',
    description: 'Which Pokemon will you encounter Next?',
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="57x57"
                    href="apple-touch-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="114x114"
                    href="apple-touch-icon-114x114.png"
                />
                {/* ... other head elements ... */}
                <title>Oak</title>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
