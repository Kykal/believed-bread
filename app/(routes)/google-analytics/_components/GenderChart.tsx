//MATERIAL DESIGN
//Components
import { PieChart } from '@mantine/charts';


//Components
import PrefabCard from '../../_components/PrefabCard';


const COLORS = ['teal', 'blue'];


//Types
import type GoogleAnalytics from '@/app/_types/GoogleAnalytics';
type GenderChartProps = {
	data: GoogleAnalytics;
};


//Main component content
const GenderChart = ({data}: GenderChartProps): JSX.Element => {
	//Main component render
	return (
		<PrefabCard
			title='Género'
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
				data={data.demografía.género.map( (item, index) => ({
					name: item.tipo,
					value: item.porcentaje,
					color: COLORS[index],
				}) )}
			/>
		</PrefabCard>
	);
};


export default GenderChart; //Export main component
