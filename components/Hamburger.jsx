import React, { useRef } from 'react';
import userData from '@constants/data';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Hamburger({ children }) {
	const router = useRouter();
	const containerRef = useRef(null);

	const onIconClick = () => {
		containerRef.current.classList.toggle('is-active');
	};

	return (
		<div
			ref={containerRef}
			id='hamburger-container'
			className='bg-white dark:bg-[#120e26]'>
			<div id='hamburger' className='hamburger' onClick={onIconClick}>
				<span className='line bg-black dark:bg-white'></span>
				<span className='line bg-black dark:bg-white'></span>
				<span className='line bg-black dark:bg-white'></span>
			</div>
			<ul>
				{userData.navItems.map((item, index) => (
					<Link href={item.to} key={index}>
						<li
							
							className={`text-base  ${
								router.asPath === item.to
									? 'text-gray-800 font-bold dark:text-gray-400'
									: 'text-gray-600 dark:text-gray-300 font-normal '
							}`}>
							{item.title}{' '}
							{router.asPath === item.to && (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-arrow-down inline-block h-3 w-3'
									viewBox='0 0 16 16'>
									<path
										fillRule='evenodd'
										d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
									/>
								</svg>
							)}
						</li>
					</Link>
				))}
				{children}
			</ul>
		</div>
	);
}

export default Hamburger;
