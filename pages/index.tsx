import React from 'react';
import { Box, Container, Heading, useColorModeValue, useTheme } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import { quizesListInteractors } from '../application/services';
import { QuizJson } from '../entities/Quiz';
import { QuizesList } from '../application/quizes-list/QuizesList';

interface IDashboardProps {
	quizesJson: QuizJson[];
}

const Dashboard: React.FC<IDashboardProps> = ({ quizesJson = [] }) => {
	const theme = useTheme();
	const secondaryBgColor = useColorModeValue(theme.colors.secondary, 'gray.900');

	return (
		<Box>
			<Box
				bgGradient={`linear-gradient(156.03deg, ${theme.colors.brand} 13.07%, ${secondaryBgColor} 100%);`}
				width="full"
			>
				<Container maxW="container.lg" py={24}>
					<Heading color={useColorModeValue('white', 'black')}>Interview Mate</Heading>
				</Container>
			</Box>

			<Container maxW="container.lg">
				<QuizesList quizesJson={quizesJson} />
			</Container>
			<Box />
		</Box>
	);
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async () => {
	const quizesJson = await quizesListInteractors.fetchQuizesList();

	return {
		props: {
			quizesJson: quizesJson ?? [],
		},
	};
};
