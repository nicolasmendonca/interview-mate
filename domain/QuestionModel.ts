export type QuestionId = string;

export interface QuestionModel {
	id: QuestionId;
	question: string;
	help?: string;
}
