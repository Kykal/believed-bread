//React router
import { Form } from 'react-router-dom';


//MATERIAL DESIGN
//Icons
import { MdSearch } from "react-icons/md";
import { Routes } from '../_configurations/router';


//Main component content
const SearchBar = (): JSX.Element => {
	//Main component render
	return (
		<Form
			method='POST'
			action={Routes.metaAds}
			className='relative'
		>
			<fieldset
				className='bg-neutral-100 w-full rounded flex items-center space-x-1'
			>
				<input
					name='search'
					aria-label='Search ads'
					type='text'
					placeholder='Search'
					className='bg-transparent px-4 py-3 grow rounded-tl rounded-bl'
				/>
				<div className='w-12 h-11 center' >
					<button
						type='submit'
						className='aspect-square text-[1.5rem] text-neutral-400 hover:bg-neutral-200 p-2 rounded'
					>
						<MdSearch />
					</button>
				</div>
			</fieldset>
		</Form>
	);
};


export default SearchBar; //Export main component
