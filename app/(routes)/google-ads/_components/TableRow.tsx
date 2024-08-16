import { Routes } from '@/app/_configurations/routes';


//MATERIAL DESIGN
//Components
import {
	ActionIcon,
	NumberFormatter,
	TableTd,
	TableTr,
	Tooltip,
} from '@mantine/core';
//Icons
import { MdKeyboardArrowRight } from 'react-icons/md';


//Types
import type GoogleAd from '@/app/_types/GoogleAd';
import Link from 'next/link';


//Main component content
const TableRow = (ad: GoogleAd): JSX.Element => {


	//Main component render
	return (
		<TableTr>
			<TableTd>{ad.nombre}</TableTd>
			<TableTd align='right' >
				<NumberFormatter
					value={ad.costo}
					prefix='$'
					suffix='MXN'
					decimalScale={2}
				/>
			</TableTd>
			<TableTd align='right' >
				{ad.clics} (<NumberFormatter value={(ad.clics*100)/ad.impresiones} suffix='%' decimalScale={2} style={{ color: 'green' }} />)
			</TableTd>
			<TableTd align='right' >
				{ad.conversiones} (<NumberFormatter value={(ad.conversiones*100)/ad.impresiones} suffix='%' decimalScale={2} style={{ color: 'green' }} />)
			</TableTd>
			<TableTd align='right' >{ad.impresiones}</TableTd>
			<TableTd align='right' >
				<Tooltip label='Ver anuncio' withArrow >
					<ActionIcon
						variant='light'
						component={Link}
						href={`${Routes.googleAds}/${ad.nombre.replaceAll(' ', '_')}`}
					>
						<MdKeyboardArrowRight />
					</ActionIcon>
				</Tooltip>
			</TableTd>
		</TableTr>
	);
};


export default TableRow; //Export main component
