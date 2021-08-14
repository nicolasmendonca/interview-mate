import React from 'react';
import { Heading } from '@chakra-ui/react';

import { useCatalogQuestionSearch } from '../CatalogQuestionSearch';
import {
	CatalogQuestionAccordionItem,
	CatalogQuestionAccordionProvider,
} from '../CatalogQuestionAccordion';
import { BoxWithMargin } from '../../components/shared';

interface ICatalogQuestionProps {}

const noop = () => {};

export const CatalogQuestion: React.FC<ICatalogQuestionProps> = () => {
	const { results: categories } = useCatalogQuestionSearch();

	return (
		<CatalogQuestionAccordionProvider>
			{categories.map(({ id, name, questions }) => (
				<React.Fragment key={id}>
					<BoxWithMargin mb={6} mt={12}>
						<Heading as="h2" color="white">
							{name}
						</Heading>
					</BoxWithMargin>
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
				</React.Fragment>
			))}
		</CatalogQuestionAccordionProvider>
	);
};
