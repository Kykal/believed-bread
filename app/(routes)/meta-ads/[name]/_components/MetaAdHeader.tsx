//NextJS
'use client';


//MATERIAL DESIGN
//Components
import {
	Group,
	Text,
	Title,
} from '@mantine/core';


//Types
type MetaAdHeaderProps = {
	name: string;
};


//Main component content
const MetaAdHeader = ({name}: MetaAdHeaderProps): JSX.Element => {
	//Main component render
	return (
		<Group align='baseline' >
			<Title order={2} size='h3' >
				Meta ads
			</Title>
			<Title order={3} size='p' fw='normal' c='dimmed' >
				{name}
			</Title>
		</Group>
	);
};


export default MetaAdHeader; //Export main component
