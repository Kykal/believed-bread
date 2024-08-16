//MATERIAL DESIGN
//Components
import { Grid, GridCol, Title } from '@mantine/core';


//Main component content
const CrmHeader = (): JSX.Element => {
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
					CRM
				</Title>
			</GridCol>
		</Grid>
	);
};


export default CrmHeader; //Export main component
