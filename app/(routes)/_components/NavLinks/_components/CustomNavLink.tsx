//NextJS
'use client';
import { Routes } from '@/app/_configurations/routes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


import {
	NavLink
} from '@mantine/core';


//Types
export type CustomNavLinkProps = {
	label: string;
	href: Routes;
	icon: React.ReactNode;
	activeIcon: React.ReactNode;
};


//Main component content
const CustomNavLink = ({label, icon, activeIcon, href}: CustomNavLinkProps): JSX.Element => {

	const pathname = usePathname();

	const isActive = pathname.includes(href);

	const leftSection = isActive ? activeIcon : icon;


	//Main component render
	return (
		<NavLink
			active={isActive}
			label={label}
			leftSection={leftSection}
			component={Link}
			href={href}
		/>
	);
};


export default CustomNavLink; //Export main component
