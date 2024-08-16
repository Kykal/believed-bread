import { googleAnalyticsData } from '@/app/_contants';


//MATERIAL DESIGN
//Components
import {
	Grid,
	GridCol,
} from '@mantine/core';


//Components
import AgeChart from './AgeChart';
import GenderChart from './GenderChart';
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
				<GenderChart data={data} />
			</GridCol>
			<GridCol span={span} >
				<AgeChart data={data} />
			</GridCol>
		</Grid>
	);
};


export default Charts; //Export main component
