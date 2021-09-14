import React from 'react';

import { CatalogQuestion, CatalogQuestionProps } from '../../components/CatalogQuestion';
import { QuestionId } from '../../entities/Question';

import { useExpandedAccordion } from './hooks';

export interface ICatalogQuestionWithManagedExpandedStateProps
	extends Omit<CatalogQuestionProps, 'isExpanded' | 'onExpandToggle'> {
	id: QuestionId;
}

export const CatalogQuestionAccordionItem: React.FC<ICatalogQuestionWithManagedExpandedStateProps> =
	({ id, question, help, onAddToInterviewClick }) => {
		const { isExpanded, toggleExpanded } = useExpandedAccordion();

		return (
			<CatalogQuestion
				help={help}
				isExpanded={isExpanded(id)}
				question={question}
				onAddToInterviewClick={onAddToInterviewClick}
				onExpandToggle={() => toggleExpanded(id)}
			/>
		);
	};
