'use client';

import React from 'react';
// @ts-expect-error Bootstrap CSS is resolved by Next.js at build time.
import 'bootstrap/dist/css/bootstrap.css';
// @ts-expect-error Global SCSS is resolved by Next.js at build time.
import './globals.scss';
import ClientLayout from '@/app/ClientLayout';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Provider } from 'react-redux';
import store from '@/store/index';
import TanstackProvider from './components/providers/tanstack-provider';

export const dynamicParams = true;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClientLayout>
			<Provider store={store}>
				<TanstackProvider>{children}</TanstackProvider>
				<SpeedInsights />
			</Provider>
		</ClientLayout>
	);
}
