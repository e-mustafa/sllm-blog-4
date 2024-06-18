import { useContext, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Store } from '@/Context/ContextApi';
import { itemsPerPageOptions } from '@/configs/siteConfig';

function Pagination() {
	const t = useTranslations('HomePage');
	const { state, dispatch } = useContext(Store);
	const { articles } = state;

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0].value);
	const [totalPages, setTotalPages] = useState(
		Math.ceil(articles?.length / itemsPerPage)
	);
	const [paginatedPosts, setPaginatedPosts] = useState([]);

	useEffect(() => {
		const calculatePages = (allPosts) => {
			const totalPages = Math.ceil(allPosts?.length / itemsPerPage);
			setTotalPages(totalPages);
		};

		calculatePages(articles);

		const posts = articles?.slice(
			(currentPage - 1) * itemsPerPage,
			currentPage * itemsPerPage
		);
		setPaginatedPosts(posts);
	}, [articles, itemsPerPage, currentPage]);

	useEffect(() => {
		dispatch({ type: 'UPDATE_PAGINATED_ARTICLES', payload: paginatedPosts });
	}, [paginatedPosts, dispatch]);

	// Function to handle page change
	const handlePageChangeLocal = (pageNumber) => {
		if (pageNumber < 1 || pageNumber > totalPages) return;
		setCurrentPage(pageNumber);
	};

	const handleChange = (event) => {
		const selectedValue = parseInt(event.target.value);
		setItemsPerPage(selectedValue);
	};

	// Render page numbers based on current page
	const pageNumbers = [...Array(totalPages || 3)].map((_, i) => i + 1);
	const renderedPageNumbers = pageNumbers.map((pageNumber) => {
		if (pageNumber === currentPage) {
			return (
				<div
					key={pageNumber}
					aria-current="page"
					className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					{pageNumber}
				</div>
			);
		} else {
			return (
				<button
					key={pageNumber}
					type="button"
					className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
					onClick={() => handlePageChangeLocal(pageNumber)}
				>
					{pageNumber}
				</button>
			);
		}
	});

	return (
		articles?.length > 0 && (
			<div className="w-full flex items-center justify-between border-t border-gray-200 bg-white py-3 my-8 capitalize">
				<hr />
				<div className="flex flex-1 justify-between sm:hidden">
					<button
						disabled={currentPage === 1}
						onClick={() => handlePageChangeLocal(currentPage - 1)}
						className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
							currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
						}`}
					>
						{t('previous')}
					</button>
					<button
						disabled={currentPage === totalPages}
						onClick={() => handlePageChangeLocal(currentPage + 1)}
						className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
							currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
						}`}
					>
						{t('next')}
					</button>
				</div>
				<div className="hidden sm:flex flex-col gap-2 sm:flex-1 sm:items-center sm:justify-between">
					<div className="flex justify-between w-full capitalize">
						<div>
							{articles?.length < 1 ? (
								<p className="text-gray-500">{t('no-search-result')}</p>
							) : (
								<p className="text-sm text-gray-700 capitalize">
									{t('showing')}
									<span className="font-medium px-1">
										{(currentPage - 1) * itemsPerPage + 1} -{' '}
										{currentPage * itemsPerPage > articles?.length
											? articles?.length
											: currentPage * itemsPerPage}{' '}
									</span>
									{t('of')}
									<span className="font-medium px-1">{articles?.length}</span>
									{t('items')}
								</p>
							)}
						</div>
						<div className="flex items-center">
							<span className="mx-2 capitalize ">{t('items-per-page')}:</span>
							<select
								className="p-1 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={itemsPerPage}
								onChange={handleChange}
							>
								{itemsPerPageOptions.map((option) => (
									<option key={option?.value} value={option?.value}>
										{option?.label}
									</option>
								))}
							</select>
						</div>
					</div>
					<div>
						<nav
							className="isolate inline-flex -space-x-px rounded-md shadow-sm"
							aria-label="Pagination"
						>
							<button
								disabled={currentPage === 1}
								onClick={() => handlePageChangeLocal(currentPage - 1)}
								className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
									currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
								}`}
							>
								<span className="sr-only">{t('previous')}</span>
								<svg
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
							{renderedPageNumbers}
							<button
								disabled={currentPage === totalPages}
								onClick={() => handlePageChangeLocal(currentPage + 1)}
								className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
									currentPage === totalPages
										? 'cursor-not-allowed opacity-50'
										: ''
								}`}
							>
								<span className="sr-only">{t('next')}</span>
								<svg
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</nav>
					</div>
				</div>
			</div>
		)
	);
}

export default Pagination;
