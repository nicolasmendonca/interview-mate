import { immerable } from 'immer';

import { Id } from '../types/Id';

import { Question, QuestionJson } from './Question';

export type QuestionCategoryId = Id;
export type QuestionCategoryName = string;
export type QuestionCategoryQuestions = Question[];

export interface QuestionCategoryJson {
	id: Id;
	name: string;
	questions: QuestionJson[];
}

export class QuestionCategory {
	[immerable] = true;

	constructor(
		public id: QuestionCategoryId,
		public name: QuestionCategoryName,
		public questions: QuestionCategoryQuestions
	) {}

	public static fromJson({ id, name, questions }: QuestionCategoryJson) {
		return new QuestionCategory(
			id,
			name,
			questions.map((question) => Question.fromJson(question))
		);
	}
}
