export type QuestionId = string;

export interface QuestionCatalogModel {
	id: QuestionId;
	question: string;
	help?: string;
}

export interface QuestionInterviewModel {
	id: QuestionId;
	question: string;
	help?: string;
	score: number;
}
