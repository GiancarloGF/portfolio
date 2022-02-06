import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const NavbarItem = ({data}) => {
    const router = useRouter();
	return (
		<Link href={data.to}>
			<a
				className={`text-base  ${
					router.asPath === data.to
						? 'text-gray-800 font-bold dark:text-gray-400'
						: 'text-gray-600 dark:text-gray-300 font-normal '
				}`}>
				{data.title}{' '}
				{router.asPath === data.to && (
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
			</a>
		</Link>
	);
};

export default NavbarItem;
