import React from 'react';

import { QuestionCategory } from '../../entities/QuestionCategory';

export interface CatalogQuestionSearchContextValue {
	searchQuery: string;
	setSearchQuery: (searchQuery: string) => void;
	results: QuestionCategory[];
}

export const CatalogQuestionSearchContext =
	React.createContext<CatalogQuestionSearchContextValue>(undefined);
