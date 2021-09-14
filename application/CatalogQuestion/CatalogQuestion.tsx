import React from 'react';
import { Center, Heading, useColorModeValue } from '@chakra-ui/react';

import {
	CatalogQuestionAccordionItem,
	CatalogQuestionAccordionProvider,
} from '../CatalogQuestionAccordion';
import { BoxWithMargin } from '../../components/shared';
import { useInterviewQuestionSheet } from '../InterviewQuestionSheet';
import { QuestionCategory } from '../../entities/QuestionCategory';

interface ICatalogQuestionProps {
	categories: QuestionCategory[];
}

export const CatalogQuestion: React.FC<ICatalogQuestionProps> = ({ categories }) => {
	const { hasQuestion, addQuestion } = useInterviewQuestionSheet();
	const noResultsFoundColor = useColorModeValue('white', 'black');

	return (
		<CatalogQuestionAccordionProvider>
			{categories.length === 0 && (
				<Center
					border={`1px solid ${noResultsFoundColor}`}
					borderRadius="md"
					color={noResultsFoundColor}
					fontSize={24}
					fontWeight="600"
					mt={24}
					py={16}
				>
					No results found
				</Center>
			)}
			{categories.map(({ id, name, questions }) => (
				<React.Fragment key={id}>
					<BoxWithMargin mb={6} mt={12}>
						<Heading as="h2" color="white">
							{name}
						</Heading>
					</BoxWithMargin>
					{questions
						.filter((question) => !hasQuestion(question.id))
						.map((catalogQuestion) => (
							<BoxWithMargin key={catalogQuestion.id}>
								<CatalogQuestionAccordionItem
									help={catalogQuestion.help}
									id={catalogQuestion.id}
									question={catalogQuestion.text}
									onAddToInterviewClick={() =>
										addQuestion({
											help: catalogQuestion.help,
											id: catalogQuestion.id,
											question: catalogQuestion.text,
											score: 0,
										})
									}
								/>
							</BoxWithMargin>
						))}
				</React.Fragment>
			))}
		</CatalogQuestionAccordionProvider>
	);
};
