//React router
import { useLoaderData, useNavigation } from 'react-router-dom';


//Components
import Card from '../../../_components/Card';


//Types
import type MetaAd from '../../../_types/metaAd';
type AdCostCardProps = {
	ad: MetaAd;
};
type ConversionsCardProps = {
	ad: MetaAd;
};
type ReachCardProps = {
	ad: MetaAd;
};
type ParticipationCardProps = {
	ad: MetaAd;
};


//Main component content
const Page = (): JSX.Element => {

	const data = useLoaderData() as MetaAd;
	const { state } = useNavigation();


	//Main component render
	return (
		<main className='space-y-6' >
			<div className='flex items-center space-x-2' >
				<h1 className='text-4xl font-bold text-neutral-500' >
					Meta Ads
				</h1>
				<h2 className='font-light text-lg' >
					{state === 'loading' ? 'Cargando' : data.nombre}
				</h2>
			</div>
			<div className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2' >
				<div className='grid gap-4' >
					<AdCostCard ad={data} />
					<ReachCard ad={data} />
				</div>
				<div className='col-span-1 gap-4 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1' >
					<ConversionsCard ad={data} />
					<ParticipationCard ad={data} />
				</div>
			</div>
		</main>
	);
};


export default Page; //Export main component



const AdCostCard = ({ad}: AdCostCardProps) => {

	const cost = `$${ad.gastoPublicidad.toFixed(2)}`;


	return (
		<div className='bg-blue-500 font-bold text-white p-3 pb-5 rounded-lg flex flex-col' >
			<div className='font-semibold uppercase' >
				Costo
			</div>
			<div className='grow center' >
				<div>
					<div className='w-full text-center text-6xl center' >
						{cost}
					</div>
					<div className='text-sm text-center font-medium text-white' >
						MXN
					</div>
				</div>
			</div>
		</div>
	);
};


const ConversionsCard = ({ad}: ConversionsCardProps) => {

	const totalConversions = (
		<li>
			<div className='font-medium text-6xl' >
				{ad.conversiones}
			</div>
			<div className='text-xl' >
				Total
			</div>
		</li>
	);

	const converstionRate = (
		<li>
			<div className='flex items-baseline' >
				<div className='font-medium text-6xl' >
					{`${( (ad.conversiones*100)/ad.alcance ).toFixed(2)}`}
				</div>
				<div className='font-medium text-lg' >
					%
				</div>
			</div>
			<div className='text-xl' >
				Tasa de conversión
			</div>
		</li>
	);

	const costPerConversion = (
		<li>
			<div className='flex items-baseline' >
				<div className='font-semibold text-lg' >
					$
				</div>
				<div className='font-medium text-6xl' >
					{( ad.gastoPublicidad/ad.conversiones ).toFixed(2)}
				</div>
				<div className='font-medium text-lg' >
					MXN
				</div>
			</div>
			<div className='text-xl' >
				Costo por conversión
			</div>
		</li>
	);


	return (
		<Card label='Conversiones' >
			<ul className='space-y-3' >
				{totalConversions}
				{converstionRate}
				{costPerConversion}
			</ul>
		</Card>
	);
}


const ReachCard = ({ad}: ReachCardProps) => {

	const totalReach = (
		<li>
			<div className='font-medium text-6xl' >
				{ad.alcance}
			</div>
			<div className='text-xl' >
				Total
			</div>
		</li>
	);

	const costPerReach = (
		<li>
			<div className='flex items-baseline' >
				<div className='font-semibold text-lg' >
					$
				</div>
				<div className='font-medium text-6xl' >
					{( ad.gastoPublicidad/ad.alcance ).toFixed(2)}
				</div>
				<div className='font-medium text-lg' >
					MXN
				</div>
			</div>
			<div className='text-xl' >
				Costo por alcance
			</div>
		</li>
	);


	return (
		<Card label='Alcance' >
			<ul className='space-y-3' >
				{totalReach}
				{costPerReach}
			</ul>
		</Card>
	);
}


const ParticipationCard = ({ad}: ParticipationCardProps) => {

	const totalParticipation = (
		<li>
			<div className='font-medium text-6xl' >
				{ad.participación}
			</div>
			<div className='text-xl' >
				Total
			</div>
		</li>
	);

	const participationRate = (
		<li>
			<div className='flex items-baseline' >
				<div className='font-medium text-6xl' >
					{`${( (ad.participación*100)/ad.alcance ).toFixed(2)}`}
				</div>
				<div className='font-medium text-lg' >
					%
				</div>
			</div>
			<div className='text-xl' >
				Tasa de conversión
			</div>
		</li>
	);

	const costPerReach = (
		<li>
			<div className='flex items-baseline' >
				<div className='font-semibold text-lg' >
					$
				</div>
				<div className='font-medium text-6xl' >
					{( ad.gastoPublicidad/ad.alcance ).toFixed(2)}
				</div>
				<div className='font-medium text-lg' >
					MXN
				</div>
			</div>
			<div className='text-xl' >
				Costo por alcance
			</div>
		</li>
	);
	

	return (
		<Card label='Participación' >
			<ul className='space-y-3' >
				{totalParticipation}
				{participationRate}
				{costPerReach}
			</ul>
		</Card>
	);
};
