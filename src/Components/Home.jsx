'use client';
import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';

import { useTranslations } from 'next-intl';
import Pagination from './Global/Pagination';
import { Store } from '@/Context/ContextApi';
import dynamic from 'next/dynamic';
import LoadingComponent from './Global/LoadingComponent';
import Blogs from './Blog/Blogs';

function Home({ allData, local }) {
	const t = useTranslations('HomePage');

	const { state, dispatch } = useContext(Store);

	useEffect(() => {
		dispatch({ type: 'SET_ARTICLES', payload: allData });
	}, [allData, dispatch]);

	useEffect(() => {
		dispatch({ type: 'SET_LOCAL', payload: local });
	}, [local, dispatch]);

	// const Blogs = dynamic(() => import('./Blog/Blogs'), {
	// 	loading: () => <LoadingComponent />,
	// });

	return (
		<section className="container px-4 my-5 grid grid-cols-1 md:grid-cols-3 gap-8">
			<div className="md:col-span-2 p-4 h-full flex flex-col justify-between">
				<Blogs />
				<Pagination />
			</div>
			<aside>
				<Sidebar local={local} />
			</aside>
		</section>
	);
}

export default Home;
