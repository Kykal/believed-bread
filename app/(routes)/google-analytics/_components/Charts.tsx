import { googleAnalyticsData } from '@/app/_contants';


//MATERIAL DESIGN
//Components
import {
	Card,
	CardSection,
	Grid,
	GridCol,
	Title,
} from '@mantine/core';


//Components
import ViewsChart from './ViewsChart';


//Types
type PrefabCardProps = {
	title: string;
	children: React.ReactNode;
}


//Types
type ChartsProps = {
	startDate?: string;
	endDate?: string;
};


//Main component content
const Charts = ({startDate, endDate}: ChartsProps): JSX.Element => {

	const data = googleAnalyticsData;


	//Main component render
	return (
		<Grid>
			<GridCol span={12} >
				<ViewsChart
					data={data}
					startDate={startDate}
					endDate={endDate}
				/>
			</GridCol>
		</Grid>
	);
};


export default Charts; //Export main component



const PrefabCard = ({title, children}: PrefabCardProps) => {
	return (
		<Card
			shadow='sm'
			radius='sm'
			withBorder
			h='100%'
		>
			<CardSection inheritPadding py='xs' withBorder >
				<Title order={4} >
					{title}
				</Title>
			</CardSection>
			<CardSection inheritPadding py='xs' style={{ flexGrow: 1, }} >
				{children}
			</CardSection>
		</Card>
	);
}
