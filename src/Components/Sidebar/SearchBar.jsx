import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchTerm, onSearchChange }) => {
	const activeLocale = useLocale()
	const t = useTranslations("HomePage")
	return (
		<div className="mb-4 relative">
			<input
				type="text"
				placeholder={t('search-placeholder')}
				value={searchTerm}
				onInput={onSearchChange}
				className={`w-full p-2 border border-gray-500 rounded focus:outline-none focus:border-blue-700 focus:ring ${
					activeLocale == 'ar' ? ' pl-8' : ' pr-8'
				}`}
			/>
			<span
				className={`absolute  h-full p-3 text-gray-600 ${
					activeLocale == 'ar' ? 'left-0' : 'right-0'
				} `}
			>
				<FaSearch />
			</span>
		</div>
	);
};

export default SearchBar;
