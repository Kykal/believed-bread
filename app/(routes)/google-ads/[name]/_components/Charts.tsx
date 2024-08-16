import { googleAdsData } from '@/app/_contants';


//MATERIAL DESIGN
//Components
import {
	Card,
	CardSection,
	Grid,
	GridCol,
	Group,
	NumberFormatter,
	rem,
	Stack,
	Text,
	Title,
} from '@mantine/core';


//Types
import type GoogleAd from '@/app/_types/GoogleAd';
type ChartsProps = {
	name: string;
};
type PrefabCardProps = {
	title: string;
	children: React.ReactNode;
}
type SectionProps = {
	value: number;
	prefix?: string;
	suffix?: string;
	label: string;
}


//Main component content
const Charts = ({name}: ChartsProps): JSX.Element => {

	const data: GoogleAd = googleAdsData.campañas.filter( ({nombre}) => nombre.toLowerCase() == name.toLowerCase() )[0];

	const costCard = (
		<PrefabCard title='Costo' >
			<Group
				align='center'
				justify='center'
				h='100%'
			>
				<Stack gap={0} >
					<Group align='center' justify='center' >
						<Text
							fw='bold'
							c='blue'
							style={{
								fontSize: rem(30),
							}}
						>
							<NumberFormatter value={data.costo} prefix='$' suffix='MXN' />
						</Text>
					</Group>
					<Group align='center' justify='center' >
						<Text c='dimmed' size='sm' >
							Costo total de la campaña.
						</Text>
					</Group>
				</Stack>
			</Group>
		</PrefabCard>
	);


	const impressionsCard = (
		<PrefabCard title='Impresiones' >
			<Stack gap='lg' >
				<Section
					label='Total'
					value={data.impresiones}
				/>
				<Section
					label='Costo por impresión'
					value={data.impresiones/data.costo}
					prefix='$'
					suffix='MXN'
				/>
			</Stack>
		</PrefabCard>
	);


	const conversionCard = (
		<PrefabCard title='Conversión' >
			<Stack gap='lg' >
				<Section
					label='Total'
					value={data.conversiones}
				/>
				<Section
					label='Tasa de conversión'
					value={(data.conversiones*100)/data.impresiones}
					suffix='%'
				/>
				<Section
					label='Costo por conversión'
					value={data.conversiones/data.costo}
					prefix='$'
					suffix='MXN'
				/>
			</Stack>
		</PrefabCard>
	);

	const clicsCard = (
		<PrefabCard title='Clics' >
			<Stack gap='lg' >
				<Section
					label='Total'
					value={data.clics}
				/>
				<Section
					label='Tasa de clics'
					value={(data.clics*100)/data.impresiones}
					suffix='%'
				/>
				<Section
					label='Costo por clic'
					value={data.clics/data.costo}
					prefix='$'
					suffix='MXN'
				/>
			</Stack>
		</PrefabCard>
	);


	//Main component render
	return (
		<Grid>
			<GridCol
				span={{
					base: 12,
					sm: 6,
					lg: 3,
				}}
			>
				{costCard}
			</GridCol>
			<GridCol
				span={{
					base: 12,
					sm: 6,
					lg: 3,
				}}
			>
				{impressionsCard}
			</GridCol>
			<GridCol
				span={{
					base: 12,
					sm: 6,
					lg: 3,
				}}
			>
				{conversionCard}
				</GridCol>
			<GridCol
				span={{
					base: 12,
					sm: 6,
					lg: 3,
				}}
			>
				{clicsCard}
			</GridCol>
		</Grid>
	);
};


export default Charts; //Export main component



const Section = ({label, prefix, suffix, value}: SectionProps) => {
	return (
		<Stack gap={0} >
			<Text fw={500} size={rem(40)} >
				<NumberFormatter
					value={value}
					prefix={prefix}
					suffix={suffix}
					decimalScale={2}
				/>
			</Text>
			<Text c='dimmed' >
				{label}
			</Text>
		</Stack>
	);
};


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
