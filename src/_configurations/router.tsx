//React router
import { createBrowserRouter } from 'react-router-dom';
import searchQueryAction from '../_actions/SearchQueryAction';


//Routes
import Root from '../(pages)/main';
import MetaAds from '../(pages)/meta-ads';
import Error from '../(pages)/meta-ads/error';
import MetaAd from '../(pages)/meta-ads/[ad]';


//Types
import type MetaAdType from '../_types/metaAd';
import type { LoaderFunctionArgs, RouteObject } from 'react-router-dom';


export enum Routes {
	root = '/',

	googleAnalytics = '/google-analytics',
	googleAds = '/google-ads',
	metaAds = '/meta-ads',
	metaAd = '/meta-ads/:ad',
	crm = '/crm',
}


export enum Api {
	metaAds = '/api/meta-ads.json',
}

/**
 * To fetch all Meta Ads.
 * @returns 
 */
const metaAdsLoader = async () => {

	const res = await fetch(Api.metaAds);

	if( res.status === 404 ){
		throw new Response('Not found.', { status: 404 });
	}

	const data = await res.json();
	const ads: MetaAdType[] = data['anuncios'];

	return ads;
};

/**
 * To fetch a single Meta Ad.
 * @param param0 
 * @returns 
 */
const metaAdLoader = async ({params}: LoaderFunctionArgs) => {

	const res = await fetch(Api.metaAds);

	if( res.status === 404 ){
		throw new Response('Not found.', { status: 404 });
	}

	const data = await res.json();
	const ads: MetaAdType[] = data['anuncios'];

	const adParam: string = params.ad!;

	const adIndex = ads.findIndex( (ad) => ad.nombre.toLowerCase().includes(adParam.toLowerCase()) );

	return ads[adIndex];
};



const routes: RouteObject[] = [
	{
		path: Routes.root,
		element: <Root />,
		children: [
			{
				path: Routes.metaAds,
				element: <MetaAds />,
				errorElement: <Error />,
				loader: metaAdsLoader,
				action: searchQueryAction,
			},
			{
				path: Routes.metaAd,
				element: <MetaAd />,
				loader: metaAdLoader,
			}
		]
	},
];


const router = createBrowserRouter(routes);


export default router;
