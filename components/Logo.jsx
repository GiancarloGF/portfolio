import React from 'react';
import Link from 'next/link';

const Logo = ({ name, designation }) => {
	return (
		<Link href='/'>
			<a>
				<h1 className='font-semibold text-xl dark:text-gray-100'>
					{name}
				</h1>
				<p className='text-base font-light text-gray-500 dark:text-gray-300'>
					{designation}
				</p>
			</a>
		</Link>
	);
};

export default Logo;
