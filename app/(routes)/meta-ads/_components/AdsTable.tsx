//NextJS
import Link from 'next/link';
import { metaAdsData } from '@/app/_contants';


//MATERIAL DESIGN
//Components
import {
	NumberFormatter,
	rem,
	Table,
} from '@mantine/core';
import MetaAd from '@/app/_types/MetaAd';
import TableRow from './TableRow';


//Types
type AdsTableProps = {
	query?: string;
};


//Main component content
const AdsTable = ({query}: AdsTableProps): JSX.Element => {

	const display = {
		base: 'none',
		md: 'table-cell',
	};

	const tableHead = (
		<Table.Thead>
			<Table.Tr>
				<Table.Th>Anuncio</Table.Th>
				<Table.Th style={{ textAlign: 'right' }} display={display} >Gasto publicidad</Table.Th>
				<Table.Th style={{ textAlign: 'right' }} display={display} >Participación</Table.Th>
				<Table.Th style={{ textAlign: 'right' }} display={display} >Conversiones</Table.Th>
				<Table.Th style={{ textAlign: 'right' }} >Alcance</Table.Th>
				<Table.Th style={{ textAlign: 'right' }} w={rem(125)} >Acciones</Table.Th>
			</Table.Tr>
		</Table.Thead>
	);

	let parsedData: MetaAd[] = [];


	//If query exist -- filter data
	if( Boolean(query) ) {
		parsedData = metaAdsData.anuncios.filter( ({nombre}) => nombre.toLowerCase().includes(query!.toLowerCase()) )
	} else { //If not, do nithing
		parsedData = metaAdsData.anuncios
	}


	const rows = parsedData.map( (item, index) => (
		<TableRow
			key={`meta-ad-table-row-${item.nombre}-${index}`}
			ad={item}
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
			<Table.Tbody>
				{rows}
			</Table.Tbody>
		</Table>
	);
};


export default AdsTable; //Export main component
