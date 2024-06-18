import createMiddleware from 'next-intl/middleware';
import { defaultLocales, locales } from './configs/siteConfig';
// import { locales, defaultLocale } from '@/configs/siteConfig';

export default createMiddleware({
	// A list of all locales that are supported
	// locales: ['en', 'ar'],
	locales: locales,
	defaultLocale: defaultLocales,
	// Used when no locale matches
	// defaultLocale: 'en',
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(ar|en)/:path*'],
};
