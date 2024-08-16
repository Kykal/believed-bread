import { crmData } from '@/app/_contants';


//MATERIAL DESIGN
//Components
import {
	Grid,
	GridCol,
} from '@mantine/core';


//Components
import LeadsCounter from './LeadsCounterCard';
import PerformanceCard from './PerformanceCard';
import LeadsTable from './LeadsTable';


//Types
import type Crm from '@/app/_types/Crm';


//Types
type ChartsProps = {
	query?: string;
};


//Main component content
const Charts = ({query}: ChartsProps): JSX.Element => {

	const data: Crm = crmData;


	//Main component render
	return (
		<Grid>
			<GridCol
				span={{
					base: 12,
					md: 6,
				}}
			>
				<LeadsCounter data={data} />
			</GridCol>
			<GridCol
				span={{
					base: 12,
					md: 6,
				}}
			>
				<PerformanceCard data={data} />
			</GridCol>
			<GridCol span={12} >
				<LeadsTable data={data} query={query} />
			</GridCol>
		</Grid>
	);
};


export default Charts; //Export main component
