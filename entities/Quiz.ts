import { immerable } from 'immer';

import { Id } from '../types/Id';

import { Question, QuestionJson } from './Question';

export interface QuizJson {
	id: Id;
	position_name: string;
	quizes_questions: {
		question: QuestionJson;
	}[];
}

export class Quiz {
	[immerable] = true;

	constructor(public id: Id, public positionName: string, public questions: Question[]) {}

	static fromJson(quizJson: QuizJson): Quiz {
		return new Quiz(
			quizJson.id,
			quizJson.position_name,
			quizJson.quizes_questions.map((q) => Question.fromJSON(q.question))
		);
	}
}
