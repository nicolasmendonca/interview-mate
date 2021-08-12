import React from 'react';

import { QuestionId } from '../../domain/QuestionModel';

import { QuestionCatalogExpandedStateContext } from './QuestionCatalogAccordionContext';

export const CatalogQuestionAccordion: React.FC = ({ children }) => {
	const [expandedAccordions, setExpandedAccordions] = React.useState([]);

	const isExpanded = (accordionId: QuestionId) => expandedAccordions.includes(accordionId);
	const toggleExpanded = (accordionId: QuestionId) =>
		isExpanded(accordionId)
			? setExpandedAccordions((expandedAccordions) =>
					expandedAccordions.filter((accordion) => accordion.id)
			  )
			: setExpandedAccordions([...expandedAccordions, accordionId]);

	return (
		<QuestionCatalogExpandedStateContext.Provider
			value={{
				isExpanded,
				toggleExpanded,
			}}
		>
			{children}
		</QuestionCatalogExpandedStateContext.Provider>
	);
};
