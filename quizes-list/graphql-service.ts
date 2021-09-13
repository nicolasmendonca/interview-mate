import { gql } from 'graphql-request';

import { graphqlClient } from '../application/GraphqlClient';
import { QuizJson } from '../entities/Quiz';

export const fetchQuizesListGraphqlService = async () => {
	return (
		await graphqlClient.request<{ quizes: QuizJson[] }>(
			gql`
				query QuizQuestion {
					quizes {
						id
						position_name
						quizes_questions {
							id
							question {
								help
								id
								question
							}
						}
					}
				}
			`
		)
	).quizes;
};
