//NextJS
'use client';


//Components
import AdsTable from './_components/AdsTable';
import MetaAdsHeader from './_components/MetaAdsHeader';


//Types
type PageProps = {
	searchParams: {
		query?: string;
	}
};


//Main component content
const Page = ({searchParams: { query }}: PageProps) => {
	//Main component render
	return (
		<>
			<MetaAdsHeader />
			<AdsTable query={query} />
		</>
	);
};


export default Page; //Export main component
