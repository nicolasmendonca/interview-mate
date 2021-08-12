import React from 'react';

import { QuestionCatalogExpandedStateContext } from './QuestionCatalogAccordionContext';

export function useExpandedAccordion() {
	const value = React.useContext(QuestionCatalogExpandedStateContext);

	if (value === undefined) {
		throw new Error('Please wrap this component with QuestionCatalogAccordion');
	}

	return value;
}
