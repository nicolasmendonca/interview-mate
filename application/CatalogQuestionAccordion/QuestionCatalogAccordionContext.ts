import React from 'react';

import { QuestionId } from '../../domain/QuestionModel';

export interface IQuestionCatalogAccordionContext {
	isExpanded: (accordionId: QuestionId) => boolean;
	toggleExpanded: (accordionId: QuestionId) => void;
}

export const QuestionCatalogExpandedStateContext =
	React.createContext<IQuestionCatalogAccordionContext>(undefined);
