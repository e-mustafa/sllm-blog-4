import { useTranslations } from "next-intl";

function MainSection() {
	const t = useTranslations('HomePage');
	return (
		<main className="text-white w-full h-96 mb-24 relative bg-hero-pattern bg-center bg-cover flex flex-col p-10 justify-center items-center  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-30">
			{/* <Image src={homeImg} alt="Vercel Logo" fill objectFit="cover" /> */}
			<h1 className="text-5xl mb-4 z-20">{t('title')}</h1>
			<h4 className="text-xl z-20">{t('siteWelcome')}</h4>
		</main>
	);
}

export default MainSection;
