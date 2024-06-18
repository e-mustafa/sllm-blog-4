
import LoadingComponent from '@/Components/Global/LoadingComponent';
import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

async function getData(id) {
	const res = await fetch(`${process.env.DOMAIN}/assist/blogsData/blog_${id}.json`);
	if (!res.ok) {
		return notFound();
	}
	return res.json();
}


export async function generateMetadata({ params: { locale, blog_id } }) {
	const t = await getTranslations({ locale, namespace: 'Metadata' });
	
	const article = await getData(blog_id);
	return {
		title: t(article?.title?.[locale]) || '',
		content: t(article?.content?.[locale]) || '',
	};
}

export default async function blog_idPage({ params }) {
	const article = await getData(params?.blog_id);
	if (!article) {
		return notFound();
	}

	const BlogDetailsPage = dynamic(() => import('@/Components/Blog/BlogDetailsPage'), {
		loading: () => <LoadingComponent />,
	});

	return <BlogDetailsPage article={article} locale={params?.locale} />;
}
