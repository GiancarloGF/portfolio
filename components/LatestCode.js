import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import getLatestRepos from '@lib/getLatestRepos';
import userData from '@constants/data';
import LinkToBtn from './LinkToBtn';


export default function LatestCode({ repositories }) {
	const [repos, setRepos] = useState([]);

	useEffect(async () => {
		// let latestRepos = await getLatestRepos(userData);
		// console.log("latestRepos", latestRepos);
		setRepos(repositories);
	}, []);
	return (
		<section className='bg-[#F1F1F1] -mt-40 dark:bg-[#120e26] pb-40'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-center md:py-40 mx-10'>
					<h1 className='text-6xl lg:text-9xl max-w-lg font-bold  my-20 md:my-0  text-[#120e26] dark:text-[#0693e3] text-center lg:text-left'>
						Latest Code
					</h1>
					<LinkToBtn
						external
						href={`https://github.com/${userData.githubUsername}`}
						text='View Github'
					/>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20'>
				{/* Single github Repo */}

				{repos &&
					repos.map((latestRepo, index) => (
						<GithubRepoCard latestRepo={latestRepo} key={index} />
					))}
			</div>
		</section>
	);
}

const GithubRepoCard = ({ latestRepo }) => {
	return (
		<div className='github-repo'>
			<h1 className='font-semibold text-xl dark:text-gray-200 text-gray-700'>
				{latestRepo.name}
			</h1>
			<p className='text-base font-normal my-4 text-gray-500'>
				{latestRepo.description}
			</p>
			<a
				href={latestRepo.clone_url}
				className='font-semibold group flex flex-row space-x-2 w-full items-center'>
				<p>View Repository </p>
				<div className='transform  group-hover:translate-x-2 transition duration-300'>
					&rarr;
				</div>
			</a>
		</div>
	);
};
