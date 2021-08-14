import React from 'react';
import Fuse from 'fuse.js';

import { CategoryModel } from '../../domain/CategoryModel';

import { CatalogQuestionSearchContext } from './CatalogQuestionSearchContext';

interface CatalogQuestionSearchProps {
	categories: CategoryModel[];
}

export const CatalogQuestionSearch: React.FC<CatalogQuestionSearchProps> = ({
	children,
	categories,
}) => {
	const [searchQuery, setSearchQuery] = React.useState('');

	const searchEngine = React.useMemo(() => {
		return new Fuse(categories, {
			keys: [
				{ name: 'name', weight: 0.3 },
				{ name: 'questions.question', weight: 0.2 },
			],
			isCaseSensitive: false,
			includeMatches: true,
			shouldSort: true,
			threshold: 0.5,
		});
	}, [categories]);

	const contextValue = React.useMemo(() => {
		const results = searchEngine.search(searchQuery).map(({ item, matches }) => ({
			...item,
			questions: matches.some((match) => match.key === 'name')
				? item.questions
				: item.questions.filter((_, index) => matches.some((match) => match.refIndex === index)),
		}));

		return {
			searchQuery,
			setSearchQuery,
			results: searchQuery === '' ? categories : results,
		};
	}, [setSearchQuery, searchQuery]);

	return (
		<CatalogQuestionSearchContext.Provider value={contextValue}>
			{children}
		</CatalogQuestionSearchContext.Provider>
	);
};
