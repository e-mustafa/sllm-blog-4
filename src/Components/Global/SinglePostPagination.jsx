'use client';
import { useContext, useEffect, useState } from 'react';
import { Store } from '@/Context/ContextApi';
import { useLocale, useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';

function SinglePostPagination() {
	const t = useTranslations('HomePage');
	const router = useRouter();
	const localActive = useLocale();
	const params = useParams();

	const { state } = useContext(Store);
	const { paginatedPosts } = state;

	const [prevPost, setPrevPost] = useState({});
	const [nextPost, setNextPost] = useState({});

	useEffect(() => {
		if (paginatedPosts) {
			const currentPostIndex = paginatedPosts.findIndex(
				(post) => post._id === params?.blog_id
			);
			if (currentPostIndex > 0) {
				setPrevPost(paginatedPosts[currentPostIndex - 1]);
			} else {
				setPrevPost(null);
			}
			if (currentPostIndex < paginatedPosts.length - 1) {
				setNextPost(paginatedPosts[currentPostIndex + 1]);
			} else {
				setNextPost(null);
			}
		}
	}, [paginatedPosts, params?.blog_id]);

	return (
		<div className="container ">
			<div className="flex flex-1 justify-evenly mb-3">
				<button
					disabled={prevPost ? false : true}
					onClick={() => router.push(`/${localActive}/${prevPost?._id}`)}
					className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
						!prevPost && 'disabled opacity-50 cursor-not-allowed'
					}`}
				>
					{t('previous')}
				</button>

				<button
					disabled={nextPost ? false : true}
					onClick={() => router.push(`/${localActive}/${nextPost?._id}`)}
					className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
						!nextPost && 'disabled opacity-50 cursor-not-allowed'
					}`}
				>
					{t('next')}
				</button>
			</div>

			<button
				type="button"
				className=" mx-auto relative flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
				onClick={() => router.push(`/`)}
			>
				{t('back-home')}
			</button>
		</div>
	);
}

export default SinglePostPagination;
