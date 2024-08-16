//MATERIAL DESIGN
//Components
import {
	Group,
	Title,
} from '@mantine/core';


//Types
type GoogleAdHeaderProps = {
	name: string;
};


//Main component content
const GoogleAdHeader = ({name}: GoogleAdHeaderProps): JSX.Element => {
	//Main component render
	return (
		<Group align='baseline' >
			<Title order={2} size='h3' >
				Google Ads
			</Title>
			<Title order={3} size='p' fw='normal' c='dimmed' >
				{name}
			</Title>
		</Group>
	);
};


export default GoogleAdHeader; //Export main component
