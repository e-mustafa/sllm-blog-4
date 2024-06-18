import { useContext } from 'react';
import BlogCard from './BlogCard';
import { Store } from '@/Context/ContextApi';
import { useTranslations } from 'next-intl';
import LoadingComponent from '../Global/LoadingComponent';

function Blogs() {
	const t = useTranslations('HomePage');
	const {
		state: { paginatedPosts },
	} = useContext(Store);


	return !paginatedPosts ? (
		<LoadingComponent />
	) : paginatedPosts?.length < 1 ? (
		<div className="text-center">{t('no-search-result')}</div>
	) : (
		<div className="grid gap-4 grid-cols-1 md:grid-cols-2 gap-4">
			{paginatedPosts?.map((article) => (
				<BlogCard key={article?._id} article={article} />
			))}
		</div>
	);
}

export default Blogs;
