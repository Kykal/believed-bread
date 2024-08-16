//MATERIAL DESIGN
//Components
import {
	Table,
	TableTbody,
	TableTh,
	TableThead,
	TableTr,
} from '@mantine/core';


//Components
import TableRow from './TableRow';


//Types
import type Crm from '@/app/_types/Crm';
type LeadsTableProps = {
	data: Crm;
	query?: string;
};


//Main component content
const LeadsTable = ({data, query}: LeadsTableProps): JSX.Element => {

	const tableHead = (
		<TableThead>
			<TableTr>
				<TableTh>Nombre</TableTh>
				<TableTh ta='right' >Costo de adquisición</TableTh>
				<TableTh ta='right' >Valor de vida</TableTh>
			</TableTr>
		</TableThead>
	);

	let parsedData = [];

	if( Boolean(query) ){
		parsedData = data.leads.filter( (item) => item.nombre.toLowerCase().includes(query!.toLowerCase()) );
	} else {
		parsedData = data.leads;
	}


	const rows = parsedData.map( (item, index) => (
		<TableRow
			key={`crm-table-row-${item.nombre}-${index}`}
			{...item}
		/>
	) );


	//Main component render
	return (
		<Table
			striped
			highlightOnHover
			withTableBorder
		>
			{tableHead}
			<TableTbody>
				{rows}
			</TableTbody>
		</Table>
	);
};


export default LeadsTable; //Export main component
