import { QuestionModel } from './QuestionModel';

export type CategoryId = string;
export type CategoryName = string;

export interface CategoryModel {
	id: CategoryId;
	name: CategoryName;
	questions: QuestionModel[];
}
