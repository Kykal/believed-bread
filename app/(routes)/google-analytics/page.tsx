//Components
import Charts from './_components/Charts';
import GoogleAnalyticsHeader from './_components/GoogleAnalyticsHeader';


//Types
type PageProps = {
	searchParams: {
		'start-date'?: string;
		'end-date'?: string;
	};
};


//Main component content
const Page = ({searchParams: { 'start-date': startDate, 'end-date': endDate, }}: PageProps): JSX.Element => {


	//Main component render
	return (
		<>
			<GoogleAnalyticsHeader />
			<Charts startDate={startDate} endDate={endDate} />
		</>
	);
};


export default Page; //Export main component
