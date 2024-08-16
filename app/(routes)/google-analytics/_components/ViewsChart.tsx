//NextJS
import viewsDateRangeAction from '@/app/_actions/viewsDateRangeAction';


//MATERIAL DESIGN
//Components
import {
	ActionIcon,
	Box,
	Button,
	Card,
	CardSection,
	Grid,
	GridCol,
	Group,
	Title,
} from '@mantine/core';
import { AreaChart } from '@mantine/charts';
import { DateInput } from '@mantine/dates';
//Icons
import { MdSearch } from 'react-icons/md';


//Types
import type GoogleAnalytics from '@/app/_types/GoogleAnalytics';
type ViewsChartProps = {
	data: GoogleAnalytics;
	startDate?: string;
	endDate?: string;
};
type PrefabCardProps = {
	title: string;
	children: React.ReactNode;
}


//Main component content
const ViewsChart = ({data, startDate, endDate}: ViewsChartProps): JSX.Element => {

	let chartData = [];


	if( Boolean(startDate) && Boolean(endDate) ){
		chartData = data.vistasPagina.filter( ({fecha}) => fecha >= startDate! && fecha <= endDate! ).map( (view, index) => ({
			'Fecha': view.fecha,
			'Vistas': view.vistas,
			'Sesiones': data.sesiones[index].sesiones,
			'Rebote': data.sesiones[index].tasaRebote * view.vistas,
		}) );
	} else {
		chartData = data.vistasPagina.map( (view, index) => ({
			'Fecha': view.fecha,
			'Vistas': view.vistas,
			'Sesiones': data.sesiones[index].sesiones,
			'Rebote': data.sesiones[index].tasaRebote * view.vistas,
		}) );
	}

	const actionButtons = (
		<Box
			component='form'
			action={viewsDateRangeAction}
		>
			<Grid justify='flex-end' >
				<GridCol span={{ base: 12, lg: 4, }} >
					<DateInput required name='start-date' placeholder='Inicio' valueFormat='YYYY-MM-DD' />
				</GridCol>
				<GridCol span={{ base: 12, lg: 4, }} >
					<DateInput required name='end-date' placeholder='Fin' valueFormat='YYYY-MM-DD' />
				</GridCol>
				<GridCol span={{ base: 12, lg: 3, }} >
					<Button type='submit' fullWidth variant='light' >
						Buscar
					</Button>
				</GridCol>
			</Grid>
		</Box>
	);


	//Main component
	return (
		<PrefabCard title='Vistas y sesiones' >
			<Group
				align='center'
				justify='flex-end'
				p='sm'
				pb='xl'
			>
				{actionButtons}
			</Group>
			<AreaChart
				dataKey='Fecha'
				data={chartData}
				h={300}
				series={[
					{ name: 'Vistas', color: 'teal', },
					{ name: 'Sesiones', color: 'blue', },
					{ name: 'Rebote', color: 'red', },
				]}
				curveType='natural'
				gridAxis='xy'
			/>
		</PrefabCard>
	);
};


export default ViewsChart; //Export main component



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