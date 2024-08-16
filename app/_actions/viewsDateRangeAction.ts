//NextJS
'use server';

import { redirect } from 'next/navigation';
import { Routes } from '../_configurations/routes';


const viewsDateRangeAction = async (formData: FormData) => {

	const startDate = String(formData.get('start-date')).split('T')[0];
	const endDate = String(formData.get('end-date')).split('T')[0];


	if( startDate > endDate ){
		return;
	}
	

	redirect(`${Routes.googleAnalytics}/?start-date=${startDate}&end-date=${endDate}`);
};


export default viewsDateRangeAction;
