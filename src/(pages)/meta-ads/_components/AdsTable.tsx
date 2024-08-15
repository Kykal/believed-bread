//Types
import type MetaAd from '../../../_types/metaAd';
type AdsTableProps = {
	ads: MetaAd[];
};


//Main component content
const AdsTable = ({ads}: AdsTableProps): JSX.Element => {


	const rows = ads.map( (ad, index) => (
		<tr key={`meta-ads-${ad.nombre}-${index}`} className='hover:bg-neutral-200' >
			<td className='text-start' >
				{ad.nombre}
			</td>
			<td className='text-end' >
				{ad.alcance}
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
