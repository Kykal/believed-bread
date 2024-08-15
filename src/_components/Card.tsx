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
		<div className='card pt-3 px-4 pb-5' >
			<div className='flex items-center justify-between' >
				<div className='text-lg font-semibold text-neutral-400' >
					{label}
				</div>
				{subLabel && (
					<div className='font-medium text-neutral-400' >
						{subLabel}
					</div>
				)}
			</div>
			{children}
		</div>
	);
};


export default Card; //Export main component
