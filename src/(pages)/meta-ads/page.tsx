//React router
import { useLoaderData, useNavigation } from 'react-router-dom';


//Types
import type MetaAd from '../../_types/metaAd';


//Components
import AdsChart from './_components/AdsChart';
import AdsTable from './_components/AdsTable';
import Card from '../../_components/Card';
import SearchBar from '../../_components/SearchBar';


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

	const ads = useLoaderData() as MetaAd[];
	const { state } = useNavigation();

	if( state === 'loading' ) {
		return (
			<div className='space-y-4' >
				<SearchBar disabled />
				<Card label='Visualizaciones' >
					<p className='center font-medium text-neutral-300 h-[300px]' >
						Cargando
					</p>
				</Card>
				<div className="card p-4">
					<p className='text-center font-medium text-neutral-300' >
						Cargando
					</p>
				</div>
			</div>
		);
	}


	return (
		<div className='space-y-4' >
			<SearchBar />
			<Card label='Visualizaciones' >
				<AdsChart ads={ads} />
			</Card>
			<AdsTable ads={ads} />
		</div>
	);
}
