import React from 'react';

import { QuestionCategory, QuestionCategoryJson } from '../../entities/QuestionCategory';

export function useQuestionsCatalog(categoriesJson: QuestionCategoryJson[]) {
	const [query, setQuery] = React.useState<string>('');

	return React.useMemo(() => {
		const categories = categoriesJson
			.map((category) => QuestionCategory.fromJson(category))
			.filter((category) => {
				return category.name.toLowerCase().includes(query.toLowerCase());
			});

		return {
			categories,
			query,
			setQuery,
		};
	}, [query, setQuery, categoriesJson]);
}
