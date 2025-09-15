"use client";

import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Press_Start_2P } from 'next/font/google';
import '@/node_modules/bootstrap/dist/css/bootstrap.css';
import './globals.scss';
import { TanstackProvider } from './components/providers/tanstack-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Provider } from 'react-redux';
import store from '../reducers/store';

export const dynamicParams = true;

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


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}
			>
				<Provider store={store}>
					<TanstackProvider>{children}</TanstackProvider>
					<SpeedInsights />
				</Provider>
			</body>
		</html>
	);
}
