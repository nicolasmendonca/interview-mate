import { createQuizesListInteractors } from '../quizes-list/interactors';
import { fetchQuizesListGraphqlService } from '../quizes-list/graphql-service';

export const quizesListInteractors = createQuizesListInteractors({
	fetchQuizesListService: fetchQuizesListGraphqlService,
});
