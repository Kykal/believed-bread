//NextJS
'use client';


//MATERIAL DESIGN
//Components
import { Grid, GridCol, Title } from '@mantine/core';


//Components
import SearchBar from '../../_components/SearchBar';


//Main component content
const MetaAdsHeader = (): JSX.Element => {
	//Main component render
	return (
		<Grid gutter='xs' >
			<GridCol
				span={{
					base: 12,
					md: 9,
				}}
			>
				<Title order={2} size='h3' >
					Meta ads
				</Title>
			</GridCol>
			<GridCol
				span={{
					base: 12,
					md: 3,
				}}
			>
				<SearchBar />
			</GridCol>
		</Grid>
	);
};


export default MetaAdsHeader; //Export main component
