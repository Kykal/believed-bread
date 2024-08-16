//MATERIAL DESIGN
//Components
import { Grid, GridCol, Title } from '@mantine/core';


//Components
import SearchBar from '../../_components/SearchBar';


//Main component content
const CrmHeader = (): JSX.Element => {
	//Main component render
	return (
		<Grid gutter='xs' >
			<GridCol
				span={{
					base: 12,
					sm: 6,
					md: 8,
					lg: 9,
				}}
			>
				<Title order={2} size='h3' >
					CRM
				</Title>
			</GridCol>
			<GridCol
				span={{
					base: 12,
					sm: 6,
					md: 4,
					lg: 3,
				}}
			>
				<SearchBar />
			</GridCol>
		</Grid>
	);
};


export default CrmHeader; //Export main component
