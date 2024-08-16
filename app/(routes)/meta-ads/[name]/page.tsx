import MetaAdHeader from './_components/MetaAdHeader';

//Types
type PageProps = {
	params: {
		name: string;
	}
};


//Main component content
const Page = ({params: { name }}: PageProps): JSX.Element => {

	const parseName = name.replaceAll('_', ' ');


	//Main component render
	return (
		<>
			<MetaAdHeader name={parseName} />
		</>
	);
};


export default Page; //Export main component
