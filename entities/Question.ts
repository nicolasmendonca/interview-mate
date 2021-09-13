import { immerable } from 'immer';

import { Id } from '../types/Id';

export type QuestionId = Id;
export type QuestionText = string;
export type QuestionHelp = string;

export interface QuestionJson {
	id: Id;
	help?: string;
	text: string;
}

export class Question {
	[immerable] = true;

	constructor(public id: QuestionId, public help: QuestionHelp, public text?: QuestionText) {}

	public static fromJSON({ id, text, help }: QuestionJson): Question {
		return new Question(id, help, text);
	}
}
