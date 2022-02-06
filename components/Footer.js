import React from 'react';
import userData from '@constants/data';

export default function Footer() {
	return (
		<div className=''>
			<div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
				<div className='h-0.5 w-full bg-white dark:bg-gray-700'></div>
				<div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8'>
					<div>
						{/* Support me by keeping this in the footer, please. :) */}
						<div>
							Developed by
							<div className='inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300'>
								<a className='hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50'>Giancarlo Guerra</a>
							</div>
						</div>
					</div>
					<div className='space-x-4 flex flex-row items-center'>
						<a href={`mailto:${userData.email}`} className='text-base font-normal text-gray-600 dark:text-gray-300'>
							gian.guerra23@gmail.com
						</a>
						<a href={userData.socialLinks.github} className='text-base font-normal text-gray-600 dark:text-gray-300'>
							Github
						</a>
						<a href={userData.socialLinks.linkedin} className='text-base font-normal text-gray-600 dark:text-gray-300'>
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
