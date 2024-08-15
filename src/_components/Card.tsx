//Types
type CardProps = {
	label: string;
	subLabel?: string;
	children: React.ReactNode;
};


//Main component content
const Card = ({label, subLabel, children}: CardProps): JSX.Element => {
	//Main component render
	return (
		<div className='card py-3 px-4' >
			<h2 className='text-lg font-medium text-neutral-400' >
				{label}
			</h2>
			{children}
		</div>
	);
};


export default Card; //Export main component
