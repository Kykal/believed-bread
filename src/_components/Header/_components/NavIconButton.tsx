//ReactJS
import useDisclosure from '../../../_hooks/useDisclosure';


//MATERIAL DESIGN
//Icons
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";


//Main component content
const NavIconButton = (): JSX.Element => {

	const [ opened, { toggle } ] = useDisclosure();

	const icon = opened ? <MdClose /> : <MdMenu /> ;


	//Main component render
	return (
		<button
			className='icon-button'
			onClick={toggle}
			title='Menu'
		>
			{icon}
		</button>
	);
};


export default NavIconButton; //Export main component
