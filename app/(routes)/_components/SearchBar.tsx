//NextJS
'use client';
import { usePathname } from 'next/navigation';
import searchAction from '@/app/_actions/searchAction';


//MATERIAL DESIGN
//Components
import {
	Box,
	TextInput,
} from '@mantine/core';
//Icons
import { MdSearch } from 'react-icons/md';


//Main component content
const SearchBar = (): JSX.Element => {

	const pathname = usePathname();

	const action = searchAction.bind(null, pathname);


	//Main component render
	return (
		<Box
			component='form'
			action={action}
		>
			<TextInput
				name='search'
				placeholder='Buscar'
				rightSection={<MdSearch />}
			/>
		</Box>
	);
};


export default SearchBar; //Export main component
