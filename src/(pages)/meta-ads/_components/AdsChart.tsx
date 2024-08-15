//Charts
import {
	ResponsiveContainer,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';


//Types
import type MetaAd from '../../../_types/metaAd';
type AdsChartProps = {
	ads: MetaAd[];
};


//Main component content
const AdsChart = ({ads}: AdsChartProps): JSX.Element => {

	const data = ads.map( (ad) => ({
		nombre: ad.nombre,
		gastoPublicidad: ad.gastoPublicidad,
		participación: ad.participación,
	}));

	const marginValue = 20.0;
	

	//Main component render
	return (
		<ResponsiveContainer width='100%' height={300} >
			<ComposedChart
				data={data}

				margin={{
					top: marginValue,
					right: marginValue,
					bottom: marginValue,
					left: marginValue,
				}}
			>
				<CartesianGrid stroke="#f5f5f5" />
				<XAxis dataKey="nombre" scale="band" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="participación" label='Gasto publicidad' barSize="100%" fill="#93c5fd" />
				<Line dataKey="gastoPublicidad" label='Participación' type="monotone" stroke="#fdba74" />
			</ComposedChart>
		</ResponsiveContainer>
	);
};


export default AdsChart; //Export main component
