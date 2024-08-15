//React router
import { useLoaderData, useNavigation } from 'react-router-dom';


//Components
import Card from '../../../_components/Card';


//Types
import type MetaAd from '../../../_types/metaAd';
type StakeCardProps = {
	ad: MetaAd;
};
type AdCostCardProps = {
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
			<div className='space-y-2' >
				<StakeCard ad={data} />
				<AdCostCard ad={data} />
			</div>
		</main>
	);
};


export default Page; //Export main component



const AdCostCard = ({ad}: AdCostCardProps) => {

	const { state } = useNavigation();

	const isLoading = state === 'loading';


	return (
		<Card label='Gasto publicidad' >
			<div className='flex items-end justify-end' >
				<div className='font-medium text-xl' >
					Mex
				</div>
				<div className='font-bold text-4xl text-end' >
					{`$${isLoading ? '?' : ad.gastoPublicidad}`}
				</div>
			</div>
		</Card>
	);
}


const StakeCard = ({ad}: StakeCardProps) => {

	const { state } = useNavigation();

	const isLoading = state === 'loading';


	const stakePercentage = ((ad.participación*100)/ad.alcance).toFixed(1);
	const conversionPercentage = ((ad.conversiones*100)/ad.alcance).toFixed(1);


	return (
		<Card label='Alcance' >
			<div className='space-y-4' >
				<div className='font-bold text-4xl text-end' >
					{isLoading ? 'Cargando' : ad.alcance}
				</div>
				<ul className='space-y-3' >
					<li>
						<div className='card bg-white py-2 px-3' >
							<div className='text text-neutral-400' >
								Participación
							</div>
							<div className='flex items-center justify-end space-x-2' >
								<div className='text-3xl font-semibold' >
									{isLoading ? 'Cargando' : ad.participación}
								</div>
								<div className='w-12 text-end text-green-500' >
									{`(${isLoading ? '?' : stakePercentage}%)`}
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className='card bg-white py-2 px-3' >
							<div className='text text-neutral-400' >
								Conversiones
							</div>
							<div className='flex items-center justify-end space-x-2' >
								<div className='text-3xl font-semibold' >
									{isLoading ? 'Cargando' : ad.conversiones}
								</div>
								<div className='w-12 text-end text-green-500' >
									{`(${isLoading ? '?' : conversionPercentage}%)`}
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</Card>
	);
}
