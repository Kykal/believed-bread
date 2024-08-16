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
import GenderChart from './GenderChart';


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

	const span = {
		base: 12,
		lg: 6,
	}


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
			<GridCol span={span} >
				<GenderChart />
			</GridCol>
		</Grid>
	);
};


export default Charts; //Export main component
