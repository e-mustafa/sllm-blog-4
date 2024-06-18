import React from 'react';
import Image from 'next/image';

import placeholderImg from '../../images/image-Placeholder.png';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { defaultLocales } from '@/configs/siteConfig';

function BlogCard({ article }) {
	const localActive = useLocale() || defaultLocales;
	const t = useTranslations('HomePage');

	return (
		<article className="flex flex-col relative bg-gray-50 shadow-lg">
			<Link href={`/${localActive}/${article?._id}`}>
				<Image
					src={article?.image || placeholderImg}
					alt={article?.title?.[localActive]}
					width={500}
					height={400}
					className="img-fit"
					loading="lazy"
				/>
			</Link>

			<div className="p-4 flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{/* {t('categories')}:  */}
					{article?.categories?.[localActive]?.map((cat, index) => (
						<span key={index} className="block bg-blue-200 rounded px-2 shadow-lg">
							{cat}
						</span>
					))}
				</div>

				<div className="flex flex-wrap gap-2">
					{/* {t('tags')}: */} #:
					{article?.tags?.[localActive]?.map((cat, index) => (
						<span key={index} className="underline rounded px-1 shadow-lg text-sm">
							{cat}
						</span>
					))}
				</div>

				<Link href={`/${localActive}/${article?._id}`}>
					<h3 className="text-lg text-gray-800 font-bold">
						{article?.title?.[localActive]}
					</h3>
				</Link>

				<p className="text-sm line-clamp-2">{article?.content?.[localActive]}</p>

				<hr className="border-t border-gray-300" />

				<div className="flex gap-3 text-sm">
					{/* <PostDateFormat dateString={article?.date || Date.now()} /> . */}
					{article?.date || Date.now()} .
					<span>
						{`${article?.comments} ${t('comments')}`}

						{/* {article?.comments == 0
							? `0 ${t(comment)}`
							: article?.comments == 1
							? `1 ${t(comment)}`
							: `${article?.comments} ${t(Comments)} `} */}
					</span>
					{/* <span>
						{article?.comments?.length == 0
							? 'No Comments'
							: article?.comments?.length == 1
							? '1 Comment'
							: `${article?.comments?.length} Comments`}{' '}
					</span> */}
				</div>
			</div>
		</article>
	);
}

export default React.memo(BlogCard);
