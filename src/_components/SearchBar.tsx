//React router
import { Form } from 'react-router-dom';


//MATERIAL DESIGN
//Icons
import { MdSearch } from "react-icons/md";
import { Routes } from '../_configurations/router';


//Types
type SearchBarProps = {
	disabled?: boolean;
};


//Main component content
const SearchBar = ({disabled}: SearchBarProps): JSX.Element => {
	//Main component render
	return (
		<Form
			method='POST'
			action={Routes.metaAds}
			className='relative'
		>
			<fieldset
				className='bg-neutral-100 w-full rounded flex items-center space-x-1'
				disabled={disabled}
			>
				<input
					name='search'
					aria-label='Search ads'
					type='text'
					placeholder='Search'
					className='bg-transparent px-4 py-3 grow rounded-tl rounded-bl disabled:placeholder:text-neutral-300'
					disabled={disabled}
				/>
				<div className='w-12 h-11 center' >
					<button
						type='submit'
						disabled={disabled}
						className='aspect-square text-[1.5rem] text-neutral-400 hover:bg-neutral-200 p-2 rounded disabled:bg-neutral-100 disabled:text-neutral-300'
					>
						<MdSearch />
					</button>
				</div>
			</fieldset>
		</Form>
	);
};


export default SearchBar; //Export main component
