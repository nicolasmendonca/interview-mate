/* eslint-disable no-console */
import React from 'react';
import {
	Box,
	ChakraProps,
	Divider,
	Editable,
	EditableInput,
	EditablePreview,
	Heading,
	HStack,
	Icon,
	IconButton,
	useTheme,
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';

import { CatalogQuestion } from '../components/CatalogQuestion';
import { InterviewQuestion } from '../components/InterviewQuestion';
import { SearchQuestionCatalog } from '../components/SearchQuestionCatalog';
import { BoxWithMargin, BoxWithPadding } from '../components/shared';

const HalfSection: React.FC<ChakraProps> = (props) => (
	<Box minHeight="100vh" width="50%" {...props} />
);

const noop = () => {};
const catalogQuestions = [
	{
		id: 1,
		isExpanded: false,
		question: 'Compare `useState` vs `useReducer`',
	},
	{
		id: 2,
		isExpanded: false,
		question: 'Compare `useState` vs `useReducer`',
	},
	{
		id: 3,
		isExpanded: false,
		question: 'Compare `useState` vs `useReducer`',
	},
	{
		id: 4,
		isExpanded: false,
		question: 'Compare `useState` vs `useReducer`',
	},
];

const interviewQuestions = [
	{ id: 1, question: 'Compare `useState` vs `useReducer`', score: null },
	{ id: 2, question: 'Compare `useState` vs `useReducer`', score: null },
	{ id: 3, question: 'Compare `useState` vs `useReducer`', score: null },
	{ id: 4, question: 'Compare `useState` vs `useReducer`', score: null },
];

const InterviewMate: React.FC = () => {
	const theme = useTheme();

	return (
		<HStack bgColor="bg" className="InterviewMate" spacing={0}>
			<HalfSection
				bgGradient={`linear-gradient(156.03deg, ${theme.colors.brand} 13.07%, ${theme.colors.secondary} 100%);`}
			>
				<BoxWithPadding minWidth="container.xs">
					<BoxWithMargin mt={10}>
						<SearchQuestionCatalog />
					</BoxWithMargin>

					<BoxWithMargin mb={6} mt={12}>
						<Heading as="h2" color="white">
							React
						</Heading>
					</BoxWithMargin>
					{catalogQuestions.map((catalogQuestion) => (
						<BoxWithMargin key={catalogQuestion.id}>
							<CatalogQuestion
								isExpanded={catalogQuestion.isExpanded}
								question={catalogQuestion.question}
								onAddToInterviewClick={noop}
							/>
						</BoxWithMargin>
					))}
				</BoxWithPadding>
			</HalfSection>
			<HalfSection>
				<BoxWithPadding minWidth="container.xs">
					<Editable defaultValue="React Mid. Developer" fontSize="4xl" fontWeight="bold">
						<EditablePreview />
						<EditableInput />
						<IconButton aria-label="Edit" icon={<Icon aria-hidden as={FiEdit} />} ml={4} />
					</Editable>
					<BoxWithMargin mb={12}>
						<Divider />
					</BoxWithMargin>

					{interviewQuestions.map((interviewQuestion) => (
						<BoxWithMargin key={interviewQuestion.id}>
							<InterviewQuestion
								question={interviewQuestion.question}
								score={interviewQuestion.score}
								onScoreSubmit={noop}
							/>
						</BoxWithMargin>
					))}
				</BoxWithPadding>
			</HalfSection>
		</HStack>
	);
};

export default InterviewMate;
