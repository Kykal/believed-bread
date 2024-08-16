import { Grid, GridCol, Title } from '@mantine/core';

//Main component content
const GoogleAnalyticsHeader = (): JSX.Element => {


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
					Google Analytics
				</Title>
			</GridCol>
		</Grid>
	);
};


export default GoogleAnalyticsHeader; //Export main component
