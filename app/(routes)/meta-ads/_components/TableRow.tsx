//MATERIAL DESIGN
//Components
import {
	TableTr,
	TableTd,
	NumberFormatter,
	ActionIcon,
	Tooltip,
} from '@mantine/core';
//Icons
import { MdKeyboardArrowRight } from "react-icons/md";


//Types
import type MetaAd from '@/app/_types/MetaAd';
import Link from 'next/link';
import { Routes } from '@/app/_configurations/routes';
type TableRowProps = {
	ad: MetaAd;
};
type CustomNumberFormatterProps = {
	value: number;
};


//Main component content
const TableRow = ({ad}: TableRowProps): JSX.Element => {

	const display = {
		base: 'none',
		md: 'table-cell',
	};


	//Main component render
	return (
		<TableTr>
			<TableTd>{ad.nombre}</TableTd>
			<TableTd align='right' display={display} >
				<NumberFormatter value={ad.gastoPublicidad} prefix='$' suffix=' MXN' thousandSeparator=' ' decimalScale={2} />
			</TableTd>
			<TableTd align='right' display={display} >
				{ad.participación} (<CustomNumberFormatter value={((ad.participación*100)/ad.alcance)} />)
			</TableTd>
			<TableTd align='right' display={display} >
				{ad.conversiones} (<CustomNumberFormatter value={((ad.conversiones*100)/ad.alcance)} />)
			</TableTd>
			<TableTd align='right' >{ad.alcance}</TableTd>
			<TableTd align='right' >
				<Tooltip label='Ver anuncio' withArrow >
					<ActionIcon
						variant='light'
						component={Link}
						href={`${Routes.metaAds}/${ad.nombre.replaceAll(' ', '_')}`}
					>
						<MdKeyboardArrowRight />
					</ActionIcon>
				</Tooltip>
			</TableTd>
		</TableTr>
	);
};


export default TableRow; //Export main component


const CustomNumberFormatter = ({value}: CustomNumberFormatterProps) => {
	return (
		<NumberFormatter
			value={value}
			thousandSeparator=' '
			decimalScale={2}
			suffix='%'
			style={{ color: 'green' }}
		/>
	);
}
