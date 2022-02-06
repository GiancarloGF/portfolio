import React from 'react';
import Tag from './Tag';

const ProjectCard = ({ project }) => {
	return (
		<div className='col-span-3 rounded-2xl gap-4 grid grid-cols-12 auto-rows-auto min-h-0  bg-white dark:bg-[#1a1336] relative p-4 hover:-translate-y-1  transition-all hover:transition-all'>
			<div className='sm:col-span-4 col-span-12 '>
				<img src={project.imgUrl} alt='' className='w-full h-full' />
			</div>
			<div className='sm:col-span-8 col-span-12  flex flex-col sm:gap-4 gap-2'>
				<h2 className='md:text-5xl text-4xl font-semibold'>{project.name}</h2>
				<h4 className='md:text-xl text-lg font-semibold opacity-50'>{`${project.type} / ${project.date}`}</h4>
				<p className='md:text-base text-sm'>{project.description}</p>
				<div className='flex flex-wrap gap-2'>
					{project.stack.map((stack) => {
						return <Tag key={stack} tag={stack} />;
					})}
				</div>
				<span className='flex  mt-auto justify-end self-end bottom-0 right-0 gap-4'>
					<a
						href={project.githubUrl}
						target='_blank'
						className='  text-xs flex flex-row w-max items-center dark:white  cursor-pointer'>
						Visit Github
					</a>
					/
					<a
						href={project.siteUrl}
						target='_blank'
						className=' text-xs flex flex-row w-max items-center dark:white   cursor-pointer'>
						Visit Site
					</a>
				</span>
			</div>
		</div>
	);
};

export default ProjectCard;
