import { useTranslations } from 'next-intl';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdHomeWork } from 'react-icons/md';

function Footer() {
	const t = useTranslations('Footer');
	return (
		<footer className="">
			<div className="container px-6 pt-12 pb-4 mx-auto">
				<hr className="mt-6 border-gray-200 my-4 md:my-8 border-gray-400" />

				<div className="flex w-full items-center justify-between flex-wrap gap-3">
					<p className="text-sm text-gray-400">
						{`© ${new Date().getFullYear()} ${t('copyright')} `}
						<a
							href="https://e-mustafa.github.io/portfolio/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-500 "
						>
							Mustafa Ahmed
						</a>
					</p>
					<div className="flex flex-wrap gap-2 mx-auto sm:mx-0">
						<a
							href="https://e-mustafa.github.io/portfolio/"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
							aria-label="Portfolio"
						>
							<MdHomeWork size={23} />
						</a>

						<a
							href="https://www.linkedin.com/in/e-mustafa"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
							aria-label="Linkedin"
						>
							<FaLinkedin size={20} />
						</a>

						<a
							href="https://github.com/e-mustafa"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
							aria-label="Github"
						>
							<FaGithub size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
