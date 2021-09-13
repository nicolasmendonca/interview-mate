import { QuestionModel } from './QuestionModel';

export type QuizId = string;
export type QuizPositionName = string;
export type QuizesQuestions = QuestionModel[];

export interface QuizModel {
	id: string;
	positionName: string;
	questions: QuizesQuestions;
}
