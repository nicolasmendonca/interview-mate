export type QuestionId = string;
export type Question = string;
export type QuestionCategoryId = string;

export interface QuestionModel {
	id: QuestionId;
	question: Question;
	categoryId: QuestionCategoryId;
}

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
