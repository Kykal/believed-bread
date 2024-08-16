//MATERIAL DESIGN
//Components
import { googleAdsData } from '@/app/_contants';
import GoogleAd from '@/app/_types/GoogleAd';
import {
	Table,
	TableTr,
	TableTh,
	TableTbody,
	TableThead,
	rem
} from '@mantine/core';
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

	const tableHeader = (
		<TableThead>
			<TableTr>
				<TableTh>Campaña</TableTh>
				<TableTh ta='right' display={display} >Costo</TableTh>
				<TableTh ta='right' display={display} >Clics</TableTh>
				<TableTh ta='right' display={display} >Conversiones</TableTh>
				<TableTh ta='right' >Impresiones</TableTh>
				<TableTh ta='right' w={rem(125)} >Acciones</TableTh>
			</TableTr>
		</TableThead>
	);
	
	let parsedData: GoogleAd[] = [];

	if( Boolean(query) ){
		parsedData = googleAdsData.campañas.filter( (ad) => ad.nombre.toLocaleLowerCase().includes(query!.toLowerCase()) );
	} else {
		parsedData = googleAdsData.campañas;
	}

	const rows = parsedData.map( (item, index) => (
		<TableRow
			key={`google-ad-table-row-${item.nombre}-${index}`}
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
			{tableHeader}
			<TableTbody>
				{rows}
			</TableTbody>
		</Table>
	);
};


export default AdsTable; //Export main component
