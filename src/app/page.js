import { defaultLocales } from '@/configs/siteConfig';
import { redirect } from 'next/navigation';

export default function RootPage() {
	redirect(`/${defaultLocales}`);
}
