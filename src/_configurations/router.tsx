//React router
import { createBrowserRouter, RouteObject } from 'react-router-dom';


//Routes
import Root from '../(pages)/main';
import MetaAds from '../(pages)/meta-ads';
import Error from '../(pages)/meta-ads/error';


export enum Routes {
	root = '/',

	googleAnalytics = '/google-analytics',
	googleAds = '/google-ads',
	metaAds = '/meta-ads',
	crm = '/crm',
}


export enum Api {
	metaAds = '/api/meta-ads.json',
}


const routes: RouteObject[] = [
	{
		path: Routes.root,
		element: <Root />,
		children: [
			{
				path: Routes.metaAds,
				element: <MetaAds />,
				errorElement: <Error />,
			}
		]
	},
];


const router = createBrowserRouter(routes);


export default router;
