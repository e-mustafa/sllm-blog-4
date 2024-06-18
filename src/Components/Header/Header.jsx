'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBlog } from 'react-icons/fa';
import LocalSwitcher from '../Global/LocalSwitcher';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Check which navlink is exist to set to active
	// const pathname = usePathname();
	// const linkClasses = (path) =>
	// 	pathname === path
	// 		? 'block py-2 pr-4 pl-3 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-600 md:p-0'
	// 		: 'block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0';

	return (
		<nav className="container bg-white border-gray-200 px-4 sm:px-4 py-2.5 rounded">
			<div className="container flex flex-grow justify-between items-center mx-auto">
				<Link href="/" className="flex items-center">
					<span className="self-center text-xl font-semibold whitespace-nowrap">
						<FaBlog />
					</span>
				</Link>
				{/* <button
					onClick={() => setIsOpen(!isOpen)}
					type="button"
					className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						></path>
					</svg>
				</button> */}
				<div className={``} id="navbar-default">
					{/* <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
						<li>
							<Link href="/" className={linkClasses('/')}>
								Home
							</Link>
						</li>
						<li>
							<Link href="/blogs" className={linkClasses('/blogs')}>
								Blogs
							</Link>
						</li>
					</ul> */}

					{/* <form className="flex items-center mt-3 md:mt-0 flex-grow">
						<input
							type="text"
							className="block w-full p-2 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Search..."
						/>
						<button
							type="submit"
							className="ml-2 p-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Search
						</button>
					</form> */}
					<LocalSwitcher />
				</div>
			</div>
		</nav>
	);
};

export default Header;
