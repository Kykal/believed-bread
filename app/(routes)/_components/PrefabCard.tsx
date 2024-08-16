import { Card, CardSection, Title } from '@mantine/core';

//Types
type PrefabCardProps = {
	title: string;
	children: React.ReactNode;
};


//Main component content
const PrefabCard = ({title, children}: PrefabCardProps): JSX.Element => {
	//Main component render
	return (
		<Card
			shadow='sm'
			radius='sm'
			withBorder
			h='100%'
		>
			<CardSection inheritPadding py='xs' withBorder >
				<Title order={4} >
					{title}
				</Title>
			</CardSection>
			<CardSection inheritPadding py='xs' style={{ flexGrow: 1, }} >
				{children}
			</CardSection>
		</Card>
	);
};


export default PrefabCard; //Export main component
