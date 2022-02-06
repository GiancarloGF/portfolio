import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import featuredProjects from '@data/featuredProjects.json';
import LinkToBtn from '../LinkToBtn'
export default function FeaturedProjects() {
	return (
		<div className='bg-[#F1F1F1]  dark:bg-[#120e26] p-3' id='featuredProjects'>
			<div className='max-w-6xl mx-auto'>
				<header className='flex flex-col md:flex-row justify-between items-center md:pt-20 pt-5 mx-10 md:my-20 lg:my-0'>
					<h1 className='text-6xl lg:text-9xl max-w-lg font-bold text-[#120e26] dark:text-[#0693e3] md:my-20 my-10 md:my-0   text-center'>
						Featured Projects
					</h1>
					<LinkToBtn text="View All" href="/projects"/>
				</header>

				{/* Grid starts here */}
				<div className='grid md:grid-cols-3 gap-8 pb-40 pt-16'>
					{featuredProjects &&
						featuredProjects.map((project) => {
							return <ProjectCard key={project.id} project={project} />;
						})}
				</div>
			</div>
		</div>
	);
}
