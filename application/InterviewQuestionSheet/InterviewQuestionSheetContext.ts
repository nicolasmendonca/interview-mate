import React from 'react';

import { QuestionId, QuestionInterviewModel } from '../../domain/QuestionModel';

export interface InterviewQuestionSheetContextValue {
	questions: QuestionInterviewModel[];
	hasQuestion: (questionId: QuestionId) => null | QuestionInterviewModel;
	addQuestion: (question: QuestionInterviewModel) => void;
	removeQuestion: (questionId: QuestionId) => void;
	setScore: (questionId: QuestionId, score: number) => void;
}

export const InterviewQuestionSheetContext =
	React.createContext<InterviewQuestionSheetContextValue>(undefined);
