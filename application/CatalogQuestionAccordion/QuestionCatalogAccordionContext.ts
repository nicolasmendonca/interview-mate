import React from 'react';

import { QuestionId } from '../../entities/Question';

export interface IQuestionCatalogAccordionContext {
	isExpanded: (accordionId: QuestionId) => boolean;
	toggleExpanded: (accordionId: QuestionId) => void;
}

export const QuestionCatalogExpandedStateContext =
	React.createContext<IQuestionCatalogAccordionContext>(undefined);
