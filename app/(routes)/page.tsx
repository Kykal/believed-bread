//MATERIAL DESIGN
//Components
import {
	Stack,
	Text,
	Title,
} from '@mantine/core';


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<Stack>
			<Title order={2} ta='center' >
				Un inicio asombroso
			</Title>
			<Text ta='center' >
				Algo debería de estar sucediento aquí.
			</Text>
			<Text size='xs' c='dimmed' ta='center' >
				Debería de haber habido de haber sido.
			</Text>
		</Stack>
	);
};


export default Page; //Export main component
