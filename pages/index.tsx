import React from 'react';
import {
	Box,
	chakra,
	Divider,
	Editable,
	EditableInput,
	EditablePreview,
	Heading,
	HStack,
	Icon,
	IconButton,
	useColorModeValue,
	useTheme,
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { GetStaticProps } from 'next';

import { InterviewQuestion } from '../components/InterviewQuestion';
import { SearchQuestionCatalog } from '../components/SearchQuestionCatalog';
import { BoxWithMargin, BoxWithPadding } from '../components/shared';
import { getQuestionContents } from '../utils/mdxUtils';
import {
	CatalogQuestionAccordion,
	CatalogQuestionAccordionItem,
} from '../application/CatalogQuestionAccordion';
import { CategoryModel } from '../domain/CategoryModel';

const HalfSection = chakra(Box, {
	baseStyle: {
		height: '100vh',
		width: '50%',
		px: 6,
		overflowY: 'scroll',
	},
});

const noop = () => {};

const interviewQuestions = [
	{ id: 1, question: 'Compare `useState` vs `useReducer`', score: null },
	{ id: 2, question: 'Compare `useState` vs `useReducer`', score: null },
	{ id: 3, question: 'Compare `useState` vs `useReducer`', score: null },
	{ id: 4, question: 'Compare `useState` vs `useReducer`', score: null },
];

interface InterviewMateProps {
	categories: CategoryModel[];
}

const InterviewMate: React.FC<InterviewMateProps> = ({ categories }) => {
	const theme = useTheme();
	const bgColor = useColorModeValue('bg', 'gray.800');
	const secondaryBgColor = useColorModeValue(theme.colors.secondary, 'gray.900');

	return (
		<HStack alignItems="flex-start" bgColor={bgColor} className="InterviewMate" spacing={0}>
			<HalfSection
				bgGradient={`linear-gradient(156.03deg, ${theme.colors.brand} 13.07%, ${secondaryBgColor} 100%);`}
			>
				<BoxWithPadding minWidth="container.xs">
					<BoxWithMargin mt={10}>
						<SearchQuestionCatalog />
					</BoxWithMargin>

					{categories.map(({ id, name, questions }) => (
						<React.Fragment key={id}>
							<BoxWithMargin mb={6} mt={12}>
								<Heading as="h2" color="white">
									{name}
								</Heading>
							</BoxWithMargin>
							<CatalogQuestionAccordion>
								{questions.map((catalogQuestion) => (
									<BoxWithMargin key={catalogQuestion.id}>
										<CatalogQuestionAccordionItem
											help={catalogQuestion.help}
											id={catalogQuestion.id}
											question={catalogQuestion.question}
											onAddToInterviewClick={noop}
										/>
									</BoxWithMargin>
								))}
							</CatalogQuestionAccordion>
						</React.Fragment>
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
								onRemove={noop}
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

export const getStaticProps: GetStaticProps = async () => {
	const questions = getQuestionContents();

	const uniqueCategories = Array.from(
		questions.reduce((set, question) => {
			set.add(question.category);

			return set;
		}, new Set<string>())
	);

	const categories: CategoryModel[] = uniqueCategories.map((categoryName) => {
		const categoryQuestions = questions.filter(({ category }) => category === categoryName);

		return {
			id: categoryName,
			name: categoryName,
			questions: categoryQuestions,
		};
	});

	return {
		props: { categories },
		revalidate: 60 * 60 * 24,
	};
};
