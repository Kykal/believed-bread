//MATERIAL DESIGN
//Components
import { NumberFormatter, rem, Stack, Text } from '@mantine/core';


//Components
import PrefabCard from '../../_components/PrefabCard';


//Types
import type Crm from '@/app/_types/Crm';
type PerformanceCardProps = {
	data: Crm;
};


//Main component content
const PerformanceCard = ({data}: PerformanceCardProps): JSX.Element => {


	//Main component render
	return (
		<PrefabCard title='Rendimiento' >
			<Stack gap='xs' >
				<Text c='blue' fw='bold' size={rem(50)} ta='center' >
					<NumberFormatter
						value={data.tasaConversión*100}
						suffix='%'
					/>
				</Text>
				<Text c='dimmed' ta='center' >
					Tasa de conversión
				</Text>
			</Stack>
		</PrefabCard>
	);
};


export default PerformanceCard; //Export main component
