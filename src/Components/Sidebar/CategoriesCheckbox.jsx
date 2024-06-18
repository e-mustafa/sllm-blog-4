import { useTranslations } from 'next-intl';
import React from 'react';

// const CategoriesCheckbox = ({
// 	name,
// 	title,
// 	categories,
// 	selectedCategories,
// 	onCategoryChange,
// }) => {
// 	return (
// 		<div className="mb-4">
// 			<h3 className="capitalize">{title}</h3>
// 			{categories.map((category) => (
// 				<div key={category.id} className="flex items-center mb-2">
// 					<input
// 						type="checkbox"
// 						id={`${name}-${category.id}`}
// 						name={name}
// 						checked={selectedCategories.includes(category.id)}
// 						onChange={(event) =>
// 							onCategoryChange(category.id, event.target.checked)
// 						}
// 						className="mr-2"
// 					/>
// 					<label htmlFor={`${name}-${category.id}`}>{category.name}</label>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

const CategoriesCheckbox = ({
	name,
	title,
	uniqueList,
	selectedList,
	onSelectedChange,
}) => {
	const t = useTranslations('HomePage');

	return (
		<div className="mb-4">
			<h3 className="text-lg font-bold bg-blue-600 text-white p-2">{t(title)}</h3>
			{uniqueList.map((category, index) => (
				<div key={`${name}-${index + 1}`} className="flex items-center gap-2 mx-2">
					<input
						type="checkbox"
						id={`${name}-${index + 1}`}
						value={category?.toLowerCase()}
						checked={selectedList.includes(category?.toLowerCase())}
						onChange={(event) =>
							onSelectedChange(category?.toLowerCase(), event.target.checked)
						}
					/>
					<label htmlFor={`${name}-${index + 1}`}>{category}</label>
				</div>
			))}
		</div>
	);
};

export default CategoriesCheckbox;
