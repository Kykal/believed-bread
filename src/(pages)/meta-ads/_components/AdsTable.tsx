//Types
import { Link } from 'react-router-dom';
import type MetaAd from '../../../_types/metaAd';
import { Routes } from '../../../_configurations/router';
type AdsTableProps = {
	ads: MetaAd[];
};


//Main component content
const AdsTable = ({ads}: AdsTableProps): JSX.Element => {


	const rows = ads.map( (ad, index) => (
		<tr key={`meta-ads-${ad.nombre}-${index}`} className='hover:bg-neutral-200' >
			<td className='text-start' >
				<Link to={`${Routes.metaAds}/${ad.nombre}`} className='block px-4 py-3' >
					{ad.nombre}
				</Link>
			</td>
			<td className='text-end' >
				<Link to={`${Routes.metaAds}/${ad.nombre}`} className='block px-4 py-3' >
					{ad.alcance}
				</Link>
			</td>
		</tr>
	) );


	//Main component render
	return (
		<div className='card py-2' >
			<table>
				<thead>
					<tr>
						<th className='text-start' >
							Anuncios
						</th>
						<th className='text-end' >
							Alcance
						</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		</div>
	);
};


export default AdsTable; //Export main component
