//Components
import MetaAdHeader from './_components/MetaAdHeader';
import Charts from './_components/Charts';


//Types
type PageProps = {
	params: {
		name: string;
	}
};


//Main component content
const Page = ({params: { name }}: PageProps): JSX.Element => {

	const parsedName = decodeURI(name);

	
	//Main component render
	return (
		<>
			<MetaAdHeader name={parsedName} />
			<Charts name={parsedName} />
		</>
	);
};


export default Page; //Export main component
