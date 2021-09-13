import React from 'react';
import NextLink from 'next/link';
import { Box, Text, HStack, Input, InputGroup, InputLeftElement, Link } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

import { BoxWithPadding } from '../components/shared';
import { QuizJson } from '../entities/Quiz';

import { useQuizesList } from './useQuizesList';

export const QuizesList: React.FC<{
	quizesJson: QuizJson[];
}> = ({ quizesJson }) => {
	const { search, setSearch, quizes } = useQuizesList(quizesJson);

	return (
		<Box>
			<InputGroup m={4}>
				<InputLeftElement pointerEvents="none">
					<FiSearch aria-label="Search icon" color="gray" />
				</InputLeftElement>
				<Input
					placeholder="Search question sheets..."
					value={search}
					variant="flushed"
					onChange={(e) => setSearch(e.target.value)}
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
		</Box>
	);
};
