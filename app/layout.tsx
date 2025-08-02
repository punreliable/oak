import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import { TanstackProvider } from './components/providers/tanstack-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Oak',
  description: 'Which Pokemon will you encounter Next?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
          rel='stylesheet'
        />
        <link rel='apple-touch-icon-precomposed' sizes='57x57' href='apple-touch-icon-57x57.png' />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='114x114'
          href='apple-touch-icon-114x114.png'
        />
        <link rel='apple-touch-icon-precomposed' sizes='72x72' href='apple-touch-icon-72x72.png' />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='144x144'
          href='apple-touch-icon-144x144.png'
        />
        <link rel='apple-touch-icon-precomposed' sizes='60x60' href='apple-touch-icon-60x60.png' />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='120x120'
          href='apple-touch-icon-120x120.png'
        />
        <link rel='apple-touch-icon-precomposed' sizes='76x76' href='apple-touch-icon-76x76.png' />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='152x152'
          href='apple-touch-icon-152x152.png'
        />
        <link rel='icon' type='image/png' href='@/assets/favicon-196x196.png' sizes='196x196' />
        <link rel='icon' type='image/png' href='@/assets/favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/png' href='@/assets/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' type='image/png' href='@/assets/favicon-16x16.png' sizes='16x16' />
        <link rel='icon' type='image/png' href='@/assets/favicon-128.png' sizes='128x128' />
        <link rel='icon' type='image/ico' href='/favicon.ico' />
        <meta name='application-name' content='Oak' />
        <meta name='msapplication-TileColor' content='#4D513A' />
        <meta name='msapplication-TileImage' content='mstile-144x144.png' />
        <meta name='msapplication-square70x70logo' content='mstile-70x70.png' />
        <meta name='msapplication-square150x150logo' content='mstile-150x150.png' />
        <meta name='msapplication-wide310x150logo' content='mstile-310x150.png' />
        <meta name='msapplication-square310x310logo' content='mstile-310x310.png' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@docsearch/css@3' />
        <title>Oak</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TanstackProvider>{children}</TanstackProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
