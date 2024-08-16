import { metaAdsData } from '@/app/_contants';


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

	const data = metaAdsData.anuncios.filter( ({nombre}) => nombre.toLowerCase() == name.toLowerCase() )[0];

	const span = {
		base: 12,
		sm: 6,
		lg: 3,
	};

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
							<NumberFormatter value={data.gastoPublicidad} prefix='$' suffix='MXN' />
						</Text>
					</Group>
					<Group align='center' justify='center' >
						<Text c='dimmed' size='sm' >
							Costo total de anuncio.
						</Text>
					</Group>
				</Stack>
			</Group>
		</PrefabCard>
	);

	const reachCard = (
		<PrefabCard title='Alcance' >
			<Stack gap='lg' >
				<Section
					label='Total'
					value={data.alcance}
				/>
				<Section
					label='Costo por alcance'
					value={data.alcance/data.gastoPublicidad}
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
					value={(data.conversiones*100)/data.alcance}
					suffix='%'
				/>
				<Section
					label='Costo por conversión'
					value={data.conversiones/data.gastoPublicidad}
					prefix='$'
					suffix='MXN'
				/>
			</Stack>
		</PrefabCard>
	);

	const participationCard = (
		<PrefabCard title='Participación' >
			<Stack gap='lg' >
				<Section
					label='Total'
					value={data.participación}
				/>
				<Section
					label='Tasa de participación'
					value={(data.participación*100)/data.alcance}
					suffix='%'
				/>
				<Section
					label='Costo por participación'
					value={data.participación/data.gastoPublicidad}
					prefix='$'
					suffix='MXN'
				/>
			</Stack>
		</PrefabCard>
	);


	//Main component render
	return (
		<Grid>
			<GridCol span={span} >
				{costCard}
			</GridCol>
			<GridCol span={span} >
				{reachCard}
			</GridCol>
			<GridCol span={span} >
				{conversionCard}
			</GridCol>
			<GridCol span={span} >
				{participationCard}
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
