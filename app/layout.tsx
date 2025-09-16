'use client';

import React from 'react';
import '@/node_modules/bootstrap/dist/css/bootstrap.css';
import './globals.scss';
import { TanstackProvider } from './components/providers/tanstack-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import ClientLayout from '@/app/ClientLayout';

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
