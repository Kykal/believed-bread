//NextJS
'use client';


//ReactJS
import { Suspense } from 'react';


//MATERIAL DESIGN
//Components
import {
	Grid,
	Stack,
	Title,
} from '@mantine/core';


//Components
import SearchBar from '../_components/SearchBar';


//Types
type PageProps = {
	searchParams: {
		query?: string;
	}
};


//Main component content
const Page = ({searchParams: { query }}: PageProps): JSX.Element => {

	const span = {
		base: 12,
		md: 6,
	};


	//Main component render
	return (
		<Stack gap='md' >
			<Grid>
				<Grid.Col span={span} >
					<Title order={2} size='h3' >
						Meta ads
					</Title>
				</Grid.Col>
				<Grid.Col span={span} >
					<SearchBar />
				</Grid.Col>
			</Grid>
		</Stack>
	);
};


export default Page; //Export main component
