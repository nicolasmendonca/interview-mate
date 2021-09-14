import { createQuizesListInteractors } from './quizes-list/interactors';
import { fetchQuizesListGraphqlService } from './quizes-list/graphql-service';
import { fetchQuestionsCatalogGraphqlService } from './questions-catalog/graphql-service';
import { createQuestionsCatalogInteractors } from './questions-catalog/interactors';

export const quizesListInteractors = createQuizesListInteractors({
	fetchQuizesListService: fetchQuizesListGraphqlService,
});
export const questionsCatalogInteractors = createQuestionsCatalogInteractors({
	fetchQuestionsCatalogService: fetchQuestionsCatalogGraphqlService,
});
