import React from 'react';

import { CatalogQuestionSearchContext } from './CatalogQuestionSearchContext';

export function useCatalogQuestionSearch() {
	const contextValue = React.useContext(CatalogQuestionSearchContext);

	if (contextValue === undefined) {
		throw new Error('Please wrap with <CatalogQuestionSearch>');
	}

	return contextValue;
}
