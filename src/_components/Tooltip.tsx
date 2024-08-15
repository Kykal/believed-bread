//Types
type TooltipProps = {
	children: React.ReactNode;
};


//Main component content
const Tooltip = ({children}: TooltipProps): JSX.Element => {
	//Main component render
	return (
		<div className='tooltip-container group-hover:scale-100' >
			<div className='tooltip' >
				{children}
			</div>
		</div>
	);
};


export default Tooltip; //Export main component
