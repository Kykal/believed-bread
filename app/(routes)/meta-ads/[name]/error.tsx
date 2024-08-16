//NextJS
'use client';


//MATERIAL DESIGN
//Components
import {
	Button,
	Stack,
	Text,
	Title,
} from '@mantine/core';


//Types
type ErrorProps = {
	error: Error & {
		digest?: string;
	};
	reset: () => void;
};


//Main component content
const Error = ({reset}: ErrorProps): JSX.Element => {
	//Main component render
	return (
		<Stack>
			<Title order={2} size='h3' >
				Meta Ads
			</Title>
			<Text ta='center' c='red' >
				Sucedió un error. Intente de nuevo.
			</Text>
			<Button onClick={reset} variant='light' >
				Reintentar
			</Button>
		</Stack>
	);
};


export default Error; //Export main component
