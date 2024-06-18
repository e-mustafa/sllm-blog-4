'use client';
import React from 'react';
import Image from 'next/image';

import placeholderImg from '../../images/image-Placeholder.png';
import PostDateFormat from '@/Helpers/PostDateFormat';
import { useTranslations } from 'next-intl';

function BlogDetails({ article, postLang }) {

	const t=useTranslations("HomePage")

	return (
		<article className="container px-4 mb-16 flex flex-col gap-4 capitalize ">
			<h1 className="text-3xl text-gray-800 font-bold">
				{article?.title?.[postLang]}
			</h1>
			<div className=" h-96 relative">
				<Image
					src={article?.image || placeholderImg}
					alt={article?.title?.[postLang]}
					fill
					className="img-fit"
					loading="lazy"
				/>
			</div>

			<div className="flex flex-wrap gap-2 ">
				{/* {'Blog Categories: '} */}

				{article?.categories?.[postLang]?.map((cat, index) => (
					<span key={index} className="block bg-blue-200 rounded p-2 shadow-lg">
						{cat}
					</span>
				))}
			</div>

			<div className="flex flex-wrap gap-2">
				{'#: '}
				{article?.tags?.[postLang]?.map((cat, index) => (
					<span key={index} className="block rounded p-2 shadow-lg">
						{cat}
					</span>
				))}
			</div>

			<p className="text-gray-500">
				{/* <PostDateFormat dateString={article?.date || Date.now()} /> */}
				{ `${t('published-date')} ${article?.date}`}
			</p>

			<div className="flex flex-col gap-4">
				<p>{article?.prev?.[postLang]}</p>
				<p className="text-sm">{article?.content?.[postLang]}</p>
			</div>
		</article>
	);
}

export default React.memo(BlogDetails);
