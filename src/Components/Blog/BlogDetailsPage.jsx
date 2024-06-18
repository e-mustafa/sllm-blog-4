'use client';
import dynamic from 'next/dynamic';
import LoadingComponent from '../Global/LoadingComponent';
import SinglePostPagination from '../Global/SinglePostPagination';
import { StoreProvider } from '@/Context/ContextApi';
import BlogLangToggle from '../Global/BlogLangToggle';
import { useLocale } from 'next-intl';
import { useState } from 'react';

function BlogDetailsPage({ article, locale }) {
	const BlogDetails = dynamic(() => import('@/Components/Blog/BlogDetails'), {
		loading: () => <LoadingComponent />,
	});

	const activeLocale = useLocale();
	const [postLang, setPostLang] = useState(activeLocale);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const onSelectChange = (newLocale) => {
		// const slicePath = pathname.split('/').slice(2).join('/');

		// startTransition(() => {
		// 	// router.replace(`/${newLocale}`);
		// 	// router.push(`/${newLocale}/${slicePath}`);
		// });

		setPostLang(newLocale);

		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className="flex flex-col gap-8">
			<BlogLangToggle onSelectChange={onSelectChange} postLang={postLang} />
			<BlogDetails article={article} locale={locale} postLang={postLang} />
			<SinglePostPagination />
		</div>
	);
}

export default BlogDetailsPage;
