import { Card, CardSection, CardSectionProps, Title } from '@mantine/core';

//Types
type PrefabCardProps = CardSectionProps & {
	title: string;
	children: React.ReactNode;
};


//Main component content
const PrefabCard = ({title, children, style, ...attributesProps}: PrefabCardProps): JSX.Element => {
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
			<CardSection
				inheritPadding
				py='xs'
				{...attributesProps}
				style={{
					...style,
					flexGrow: 1,
				}}
			>
				{children}
			</CardSection>
		</Card>
	);
};


export default PrefabCard; //Export main component
