import React from 'react';

import { CategoryModel } from '../../domain/CategoryModel';

export interface CatalogQuestionSearchContextValue {
	searchQuery: string;
	setSearchQuery: (searchQuery: string) => void;
	results: CategoryModel[];
}

export const CatalogQuestionSearchContext =
	React.createContext<CatalogQuestionSearchContextValue>(undefined);
