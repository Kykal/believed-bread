//NextJS
'use server';
import { redirect } from 'next/navigation';


const searchAction = async (pathname: string, formData: FormData) => {
	const search = String(formData.get('search'));

	if( search.length === 0 || search === '' ){
		redirect(pathname);
	}


	redirect(`${pathname}/?query=${search}`);
};


export default searchAction;
