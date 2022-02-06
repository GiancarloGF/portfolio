import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import userData from '@constants/data';
import NavbarITem from './NavbarItem';
import ThemeSwitcher from './ThemeSwitcher';
import Hamburger from './Hamburger';
import Logo from './Logo';

export default function Navbar() {
	const router = useRouter();
	console.log(router.asPath);
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const onToggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className='bg-white dark:bg-[#120e26]  mx-auto px-4 p-4 fixed w-screen z-50'>
			<div className='flex  md:flex-row justify-between items-center'>
				{/* Logo / Home / Text */}
				<div className='flex flex-col'>
					<Logo name={userData.name} designation={userData.designation} />
				</div>
				{/* Navbar Items */}
				<div className=' md:justify-center md:items-center space-x-8 hidden md:flex'>
					{userData.navItems.map((item, index) => (
						<NavbarITem key={index} data={item} />
					))}
					{/* Theme toggler */}
					<div className='space-x-4 flex flex-row items-center'>
						<ThemeSwitcher
							mounted={mounted}
							theme={theme}
							onToggleTheme={onToggleTheme}
						/>
					</div>
				</div>
				<Hamburger>
					<ThemeSwitcher
						mounted={mounted}
						theme={theme}
						onToggleTheme={onToggleTheme}
					/>
				</Hamburger>
			</div>
		</div>
	);
}
