import { QuizJson } from '../entities/Quiz';

interface QuizesListServices {
	fetchQuizesListService(): Promise<QuizJson[]>;
}

interface QuizesListInteractors {
	fetchQuizesList(): Promise<QuizJson[]>;
}

export const createQuizesListInteractors = ({
	fetchQuizesListService,
}: QuizesListServices): QuizesListInteractors => {
	return {
		fetchQuizesList: async () => {
			return await fetchQuizesListService();
		},
	};
};
