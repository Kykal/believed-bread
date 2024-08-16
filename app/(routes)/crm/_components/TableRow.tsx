//MATERIAL DESIGN
//Components
import {
	NumberFormatter,
	TableTd,
	TableTr,
} from '@mantine/core';


//Types
import type { Lead } from '@/app/_types/Crm';


//Main component content
const TableRow = ({nombre, costoAdquisición, valorDeVida}: Lead): JSX.Element => {
	//Main component render
	return (
		<TableTr>
			<TableTd>{nombre}</TableTd>
			<TableTd ta='right' >
				<NumberFormatter
					value={costoAdquisición}
					prefix='$'
					suffix='MXN'
				/>
			</TableTd>
			<TableTd ta='right' >{valorDeVida}</TableTd>
		</TableTr>
	);
};


export default TableRow; //Export main component
