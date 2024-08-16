//MATERIAL DESIGN
//Components
import { PieChart } from '@mantine/charts';


const COLORS = ['teal', 'blue', 'gray'];


//Components
import PrefabCard from '../../_components/PrefabCard';


//Types
import type GoogleAnalytics from '@/app/_types/GoogleAnalytics';
type AgeChartProps = {
	data: GoogleAnalytics;
};


//Main component content
const AgeChart = ({data}: AgeChartProps): JSX.Element => {


	const pieData = data.demografía.edad.map( (item, index) => ({
		name: item.rango,
		value: item.porcentaje,
		color: COLORS[index],
	}) );

	pieData.push({
		name: '?',
		value: 35,
		color: COLORS[2],
	});

	//Main component render
	return (
		<PrefabCard
			title='Edad'
			display='flex'
			style={{
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<PieChart
				withLabels
				withTooltip
				tooltipDataSource='segment'
				labelsType='percent'
				data={pieData}
			/>
		</PrefabCard>
	);
};


export default AgeChart; //Export main component
