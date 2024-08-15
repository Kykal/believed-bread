//React router
import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { Routes } from '../_configurations/router';


const searchQueryAction = async ({request}: ActionFunctionArgs) => {
	const formData = await request.formData();

	const searchValue = String(formData.get('search')).trim();

	if( searchValue.length === 0 || searchValue === '' ){
		return redirect(Routes.metaAds);
	}

	return redirect(`${Routes.metaAds}/?query=${searchValue}`);
};


export default searchQueryAction;
