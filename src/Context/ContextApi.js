import { languagesData } from '@/configs/siteConfig';
import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
	local: languagesData[0]?.short,
	articles: [],
	allArticles: [],
	paginatedPosts: [],
	searchText: '',
	currentPage: 1,
};

export function reducer(state, action) {
	switch (action.type) {
		case 'SET_ARTICLES':
			return { ...state, allArticles: action.payload, articles: action.payload };

		case 'UPDATE_FILTERED_ARTICLES':
			return { ...state, articles: action.payload };

		case 'UPDATE_PAGINATED_ARTICLES':
			return { ...state, paginatedPosts: action.payload };

		case 'SET_LOCAL':
			return { ...state, local: action.payload };

		default:
			return state;
	}
	z;
}

export function StoreProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{children}</Store.Provider>;
}
