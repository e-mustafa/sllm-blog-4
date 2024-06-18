import React, { useContext, useEffect, useMemo, useState } from 'react';
import SearchBar from './SearchBar';
import CategoriesCheckbox from './CategoriesCheckbox';
import { Store } from '@/Context/ContextApi';

const Sidebar = () => {
	const { state, dispatch } = useContext(Store);
	const { allArticles, local } = state;

	const uniqueCategories = [
		...new Set(allArticles?.map((article) => article?.categories?.[local])?.flat()),
	].sort((a, b) => a.localeCompare(b, local));

	const uniqueTags = [
		...new Set(allArticles?.map((article) => article?.tags?.[local])?.flat()),
	].sort((a, b) => a.localeCompare(b, local));

	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);
	const [filteredArticles, setFilteredArticles] = useState(allArticles);

	useEffect(() => {
		const applyFilter = (data) => {
			let filtered = data;

			// search term filter in title and content
			if (searchTerm) {
				filtered = filtered.filter(
					(article) =>
						article.title?.[local]
							.toLowerCase()
							.includes(searchTerm.toLowerCase()) ||
						article.content?.[local]
							.toLowerCase()
							.includes(searchTerm.toLowerCase())
				);
			}

			// categories filter
			if (selectedCategories?.length > 0) {
				filtered = filtered.filter((article) => {
					const articleCategories = article.categories?.[local] || [];
					const lowercaseArticleCategories = articleCategories.map((category) =>
						category.toLowerCase()
					);
					return selectedCategories.some((category) =>
						lowercaseArticleCategories.includes(category.toLowerCase())
					);
				});
			}

			// tags filter
			if (selectedTags?.length > 0) {
				filtered = filtered?.filter((article) => {
					const articleTags = article?.tags?.[local] || [];
					const lowercaseArticleTags = articleTags?.map((tag) => tag?.toLowerCase());
					return selectedTags?.some((tag) =>
						lowercaseArticleTags?.includes(tag?.toLowerCase())
					);
				});
			}

			setFilteredArticles(filtered);
		};
		applyFilter(allArticles);
	}, [allArticles, searchTerm, selectedCategories, selectedTags, local]);

	useEffect(() => {
		dispatch({ type: 'UPDATE_FILTERED_ARTICLES', payload: filteredArticles });
	}, [filteredArticles, dispatch]);

	const handleSearchChange = (event) => setSearchTerm(event.target.value);

	const handleCategoryChange = (categoryName, isChecked) => {
		let updatedCategories = [...selectedCategories];
		if (isChecked) {
			updatedCategories.push(categoryName);
		} else {
			updatedCategories = updatedCategories.filter((c) => c !== categoryName);
		}
		setSelectedCategories(updatedCategories);
	};

	const handleTagChange = (tagId, isChecked) => {
		let updatedTags = [...selectedTags];
		if (isChecked) {
			updatedTags.push(tagId);
		} else {
			updatedTags = updatedTags.filter((t) => t !== tagId);
		}
		setSelectedTags(updatedTags);
	};

	// ...logic to fetch and filter posts based on search term, selectedCategories, and selectedTags...

	return (
		<div className="h-full bg-gray-200  p-4 capitalize">
			<SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
			{/* same component for list categories or tags */}
			<CategoriesCheckbox
				name="category"
				title="categories"
				uniqueList={uniqueCategories}
				selectedList={selectedCategories}
				onSelectedChange={handleCategoryChange}
			/>

			{/* reusable component for list categories or tags */}
			<CategoriesCheckbox
				name="tag"
				title="tags"
				uniqueList={uniqueTags}
				selectedList={selectedTags}
				onSelectedChange={handleTagChange}
			/>
			{/* <TagsCheckbox
				tags={siteTags}
				selectedTags={selectedTags}
				onTagChange={handleTagChange}
			/> */}
			{/* <RecentPosts posts={[] /* ...filtered posts data /> */}
		</div>
	);
};

export default Sidebar;
