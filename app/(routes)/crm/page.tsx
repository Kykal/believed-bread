//Components
import Charts from './_components/Charts';
import CrmHeader from './_components/CrmHeader';


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
			<CrmHeader />
			<Charts query={query} />
		</>
	);
};


export default Page; //Export main component
