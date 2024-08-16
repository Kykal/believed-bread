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

	const parsedName = name.replaceAll('_', ' ');

	//Main component render
	return (
		<>
			<GoogleAdHeader name={parsedName} />
		</>
	);
};


export default Page; //Export main component
