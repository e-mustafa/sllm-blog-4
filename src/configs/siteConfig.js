export const domainFront = 'http://localhost:3000/'; // 'https://sllm-blog.vercel.app'

export const languagesData = [
	{ title: 'English', short: 'en', img: 'https://flagcdn.com/us.svg' },
	{ title: 'العربية', short: 'ar', img: 'https://flagcdn.com/sa.svg' },
];

export const locales = languagesData?.map((lang) => lang.short);
export const defaultLocales = locales[0];


export const itemsPerPageOptions = [
	{ value: 6, label: '6' },
	{ value: 12, label: '12' },
	{ value: 20, label: '20' },
];