import useSWR from 'swr';
import { fetcher } from '../../_configurations/swr';
import { Api } from '../../_configurations/router';


//Components
import AdsChart from './_components/AdsChart';
import AdsTable from './_components/AdsTable';
import Card from '../../_components/Card';


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<main className='space-y-6' >
			<h1 className='text-4xl font-bold text-neutral-500' >
				Meta Ads
			</h1>
			<div className='space-y-2' >
				<MetaAdsFetcher />
			</div>
		</main>
	);
};


export default Page; //Export main component




const MetaAdsFetcher = () => {

	const { data, error, isLoading } = useSWR(Api.metaAds, fetcher);


	if( error ){
		return (
			<div className='space-y-4' >
				<Card label='Visualizaciones' >
					<p>
						¡Ocurrió un error!
					</p>
				</Card>
			</div>
		);
	}

	if( isLoading ) {
		return (
			<div className='space-y-4' >
				<Card label='Visualizaciones' >
					<p>
						Cargando
					</p>
				</Card>
			</div>
		);
	}


	const ads = data['anuncios'];


	return (
		<div className='space-y-4' >
			<Card label='Visualizaciones' >
				<AdsChart ads={ads} />
			</Card>
			<AdsTable ads={ads} />
		</div>
	);
}
