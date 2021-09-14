import { gql } from 'graphql-request';

import { graphqlClient } from '../GraphqlClient';
import { QuestionCategoryJson } from '../../entities/QuestionCategory';

export const fetchQuestionsCatalogGraphqlService = async (): Promise<QuestionCategoryJson[]> => {
	return (
		await graphqlClient.request<{ question_categories: QuestionCategoryJson[] }>(
			gql`
				query QuestionCategories {
					question_categories {
						id
						name
						questions {
							id
							question
							help
						}
					}
				}
			`
		)
	).question_categories;
};
