import React from 'react';

import { Quiz, QuizJson } from '../entities/Quiz';

export function useQuizesList(quizesJson: QuizJson[]) {
	const [search, setSearch] = React.useState('');
	const quizes = React.useMemo(() => {
		return quizesJson.map(Quiz.fromJson).filter((q) => q.positionName.includes(search));
	}, [search, quizesJson]);

	return { quizes, search, setSearch };
}
