//Components
import { Outlet } from 'react-router-dom';
import Header from '../_components/Header';


//Main component content
const Root = (): JSX.Element => {
	//Main component render
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};


export default Root; //Export main component
