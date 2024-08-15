//Types
type CardProps = {
	label: string;
	
	children?: React.ReactNode;
	subLabel?: string;
	className?: string;
};


//Main component content
const Card = ({label, subLabel, children, className}: CardProps): JSX.Element => {

	//Main component render
	return (
		<div className={`card flex flex-col space-y-2 pt-3 px-4 pb-5 ${className}`}  >
			<div className='flex items-center justify-between' >
				<div className='text-lg font-semibold text-neutral-400 uppercase' >
					{label}
				</div>
				{subLabel && (
					<div className='font-medium text-neutral-400' >
						{subLabel}
					</div>
				)}
			</div>
			<div className='grow' >
				{children}
			</div>
		</div>
	);
};


export default Card; //Export main component
