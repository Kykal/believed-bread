//NextJS
import Link from 'next/link';
import { Routes } from '@/app/_configurations/routes';


//MATERIAL DESIGN
//Components
import {
	NavLink
} from '@mantine/core';
//Icons
import { CiViewBoard } from "react-icons/ci";
import { FaMeta } from "react-icons/fa6";
import { IoHome , IoHomeOutline } from "react-icons/io5";
import { SiGoogleanalytics, SiGoogleads } from "react-icons/si";
import { FaBuildingUser } from "react-icons/fa6";


//Components
import CustomNavLink from './_components/CustomNavLink';


//Types
import type { CustomNavLinkProps } from './_components/CustomNavLink';


//Main component content
const NavLinks = (): JSX.Element => {

	const navLinksData: CustomNavLinkProps[] = [
		{
			label: 'Meta Ads',
			icon: <FaMeta />,
			activeIcon: <FaMeta />,
			href: Routes.metaAds,
		},
		{
			label: 'Google Analytics',
			icon: <SiGoogleanalytics />,
			activeIcon: <SiGoogleanalytics />,
			href: Routes.googleAnalytics,
		},
		{
			label: 'Google Ads',
			icon: <SiGoogleads />,
			activeIcon: <SiGoogleads />,
			href: Routes.googleAds,
		},
		{
			label: 'CRM',
			icon: <FaBuildingUser />,
			activeIcon: <FaBuildingUser />,
			href: Routes.crm,
		}
	];

	const navLinks = navLinksData.map( (navLink, index) => (
		<CustomNavLink
			key={`navbar-navlink-${navLink.label}-${index}`}
			{...navLink}
		/>
	) );


	//Main component render
	return (
		<>
			<CustomNavLink
				label='Inicio'
				icon={<IoHomeOutline />}
				activeIcon={<IoHome />}
				href={Routes.home}
			/>
			<NavLink
				label='Monitor'
				leftSection={<CiViewBoard />}
				opened
			>
				{navLinks}
			</NavLink>
		</>
	);
};


export default NavLinks; //Export main component
