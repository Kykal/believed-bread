//React router
import { Link } from 'react-router-dom';
import { Routes } from '../../_configurations/router';


//MATERIAL DESIGN
//Icons
import { GrReactjs } from "react-icons/gr";


//Components
import NavIconButton from './_components/NavIconButton';


//Main component content
const Header = (): JSX.Element => {
	//Main component render
	return (
		<header id='header' className='flex items-center' >
			<div className='container mx-auto flex items-center justify-between' >
				<Link
					to={Routes.root}
					className='icon-button text-neutral-700 text-2xl font-medium'
					title='Company name'
				>
					<GrReactjs className='transition-all' />
				</Link>
				<NavIconButton />
			</div>
		</header>
	);
};


export default Header; //Export main component
