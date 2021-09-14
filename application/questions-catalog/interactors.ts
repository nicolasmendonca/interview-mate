import { QuestionCategory, QuestionCategoryJson } from '../../entities/QuestionCategory';

interface QuestionsCatalogServices {
	fetchQuestionsCatalogService(): Promise<QuestionCategoryJson[]>;
}

interface QuestionsCatalogInteractors {
	parseQuestionsCatalog: (categories: QuestionCategoryJson[]) => QuestionCategory[];
	fetchQuestionsCatalog: () => Promise<QuestionCategoryJson[]>;
}

export const createQuestionsCatalogInteractors = ({
	fetchQuestionsCatalogService,
}: QuestionsCatalogServices): QuestionsCatalogInteractors => {
	return {
		parseQuestionsCatalog: (categories) => {
			return categories.map((category) => QuestionCategory.fromJson(category));
		},
		fetchQuestionsCatalog: async () => {
			return await fetchQuestionsCatalogService();
		},
	};
};
