import Home from '@/Components/Home';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({ locale, namespace: 'HomePage' });

	return {
		title: t('title'),
		description: t('description'),
	};
}

async function getData() {
	const res = await fetch(`${process.env.DOMAIN}/assist/blogsData/blogs.json`);

	if (!res.ok) {
		return notFound();
	}
	return res.json();
}

export default async function HomePage({ params: { locale } }) {
	const allData = await getData(locale);
	
	return <Home allData={allData} local={locale} />;
}
