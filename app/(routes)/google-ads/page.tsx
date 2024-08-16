//Components
import AdsTable from './_components/AdsTable';
import GoogleAdsHeader from './_components/GoogleAdsHeader';


//Types
type PageProps = {
	searchParams: {
		query?: string;
	}
};


//Main component content
const Page = ({searchParams: { query }}: PageProps): JSX.Element => {
	//Main component render
	return (
		<>
			<GoogleAdsHeader />
			<AdsTable query={query} />
		</>
	);
};


export default Page; //Export main component
