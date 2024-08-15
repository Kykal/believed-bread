//ReactJS
import { useState } from 'react';


const useDisclosure = (initialValue: boolean = false): [
	boolean,
	{
		open: () => void,
		close: () => void,
		toggle: () => void,
	}
] => {

	const [ value, setValue ] = useState(initialValue);

	/**Set value to false. */
	const close = () => setValue(false);

	/**Set value to true. */
	const open = () => setValue(true);


	/**Toggle value to its inverse one. */
	const toggle = () => setValue((prevState: boolean) => !prevState);


	return [
		value,
		{
			open,
			close,
			toggle,
		}
	];
};


export default useDisclosure;
