//Components
import Charts from './_components/Charts';
import GoogleAdHeader from './_components/GoogleAdHeader';


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
			<GoogleAdHeader name={parsedName} />
			<Charts name={parsedName} />
		</>
	);
};


export default Page; //Export main component
