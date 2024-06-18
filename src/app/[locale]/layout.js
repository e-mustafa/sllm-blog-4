import Footer from '@/Components/Footer';
import Header from '@/Components/Header/Header';
import MainSection from '@/Components/Header/MainSection';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';
import { Suspense } from 'react';
import LoadingComponent from '@/Components/Global/LoadingComponent';
import Providers from '@/Context/providers';
import Head from 'next/head';

export default async function LocaleLayout({ children, params: { locale } }) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body dir={locale == 'ar' ? 'rtl' : 'ltr'}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<Suspense fallback={<LoadingComponent />}>
							<Header />
							<MainSection />
							{children}
							<Footer />
						</Suspense>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
