//MATERIAL DESIGN
//Components
import {
	rem,
	Stack,
	Text,
} from '@mantine/core';


//Components
import PrefabCard from '../../_components/PrefabCard';


//Types
import type Crm from '@/app/_types/Crm';
type LeadsCounterCardProps = {
	data: Crm;
};


//Main component content
const LeadsCounterCard = ({data}: LeadsCounterCardProps): JSX.Element => {

	const count = data.leads.length;


	//Main component render
	return (
		<PrefabCard title='Leads' >
			<Stack gap='xs' >
				<Text c='blue' fw='bold' size={rem(50)} ta='center' >
					{count}
				</Text>
				<Text c='dimmed' ta='center' >
					Leads totales
				</Text>
			</Stack>
		</PrefabCard>
	);
};


export default LeadsCounterCard; //Export main component
