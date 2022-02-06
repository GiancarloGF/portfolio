import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight';
import ScrolldownBtn from './ScrolldownBtn';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Hero() {
	const colors = ['#F59E0B', '#84CC16', '#10B981', '#3B82F6'];
	return (
		<div className='hero dark:bg-[#120e26] flex  flex-row justify-center items-start overflow-hidden'>
			{/* Text container */}
			<div className='w-full relative h-screen flex gap-4 justify-center items-center flex-col mx-auto text-4xl text-center md:text-left p-4'>
				Hi there 🖐, welcome to my
				<p className='w-max'>
					<RoughNotationGroup show={true}>
						<RainbowHighlight color={colors[0]}>
							<span className='text-center text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2'>
								Front-End Developer
							</span>
						</RainbowHighlight>
					</RoughNotationGroup>
				</p>
				portfolio.
				<Link to='featuredProjects' smooth={true} duration={1000} offset={-70}>
					<ScrolldownBtn />
				</Link>
			</div>
		</div>
	);
}
