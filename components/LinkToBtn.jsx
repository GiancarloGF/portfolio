import React from 'react';
import Link from 'next/link';

const LinkToBtn = ({ href, external , text}) => {
	return (
		<>
			{external ? (
				<a
					href={href}
					className='self-center  mb-5 md:mb-0 px-8 py-4 rounded-md border border-solid border-black dark:border-white dark:text-white text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						className='bi bi-arrow-up-right-square'
						stroke='4'
						strokeWidth='4'
						viewBox='0 0 16 16'>
						<path
							fillRule='evenodd'
							d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
						/>
					</svg>
					<p>{text}</p>
				</a>
			) : (
				<Link href={href}>
					<a className='self-center mb-5 md:mb-0 px-8 py-4 rounded-md border border-solid border-black dark:border-white dark:text-white text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-arrow-up-right-square'
							stroke='4'
							strokeWidth='4'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
							/>
						</svg>
						<p>{text}</p>
					</a>
				</Link>
			)}
		</>
	);
};

export default LinkToBtn;
