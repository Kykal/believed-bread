import { metaAdsData } from '@/app/_contants';


//MATERIAL DESIGN
//Components
import {
	rem,
	Table,
	TableTbody,
	TableTh,
	TableThead,
	TableTr,
} from '@mantine/core';


//Components
import TableRow from './TableRow';


//Types
import type MetaAd from '@/app/_types/MetaAd';
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
		<TableThead>
			<TableTr>
				<TableTh>Anuncio</TableTh>
				<TableTh ta='right' display={display} >Gasto publicidad</TableTh>
				<TableTh ta='right' display={display} >Participación</TableTh>
				<TableTh ta='right' display={display} >Conversiones</TableTh>
				<TableTh ta='right' >Alcance</TableTh>
				<TableTh ta='right' w={rem(125)} >Acciones</TableTh>
			</TableTr>
		</TableThead>
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
			<TableTbody>
				{rows}
			</TableTbody>
		</Table>
	);
};


export default AdsTable; //Export main component
