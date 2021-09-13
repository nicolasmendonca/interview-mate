import React from 'react';
import {
	Box,
	Container,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Text,
	useColorModeValue,
	useControllableState,
	useTheme,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { gql } from 'graphql-request';
import { GetServerSideProps } from 'next';

import { QuizId, QuizModel, QuizPositionName } from '../domain/QuizModel';
import { BoxWithPadding } from '../components/shared';
import { graphqlClient } from '../application/GraphqlClient';

interface IDashboardProps {
	quizes: QuizModel[];
}

interface QuizApiModel {
	id: QuizId;
	position_name: QuizPositionName;
}

interface QuizesQuery {
	quizes: QuizApiModel[];
}

const Dashboard: React.FC<IDashboardProps> = ({ quizes }) => {
	const [searchQuery, setSearchQuery] = useControllableState({ defaultValue: '' });
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
				<InputGroup m={4}>
					<InputLeftElement pointerEvents="none">
						<FiSearch aria-label="Search icon" color="gray" />
					</InputLeftElement>
					<Input
						placeholder="Search question sheets..."
						value={searchQuery}
						variant="flushed"
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</InputGroup>
				<Box my={12}>
					{quizes.map((quiz) => (
						<BoxWithPadding key={quiz.id} shadow="md">
							<HStack>
								<Text>
									<NextLink href={`/quiz/${quiz.id}`}>
										<Link>{quiz.positionName}</Link>
									</NextLink>
								</Text>
							</HStack>
						</BoxWithPadding>
					))}
				</Box>
			</Container>
			<Box />
		</Box>
	);
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await graphqlClient.request<QuizesQuery>(
		gql`
			query QuizQuestion {
				quizes {
					id
					position_name
				}
			}
		`
	);

	const quizes: QuizModel[] = response.quizes.map((quizApiModel) => {
		return {
			id: quizApiModel.id,
			positionName: quizApiModel.position_name,
			questions: [],
		};
	});

	return {
		props: {
			quizes,
		},
	};
};
