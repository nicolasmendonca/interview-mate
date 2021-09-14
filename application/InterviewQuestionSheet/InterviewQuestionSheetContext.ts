import React from 'react';

import { QuestionInterviewModel } from '../../domain/QuestionModel';
import { Question, QuestionId } from '../../entities/Question';

export interface InterviewQuestionSheetContextValue {
	questions: Question[];
	hasQuestion: (questionId: QuestionId) => null | QuestionInterviewModel;
	addQuestion: (question: QuestionInterviewModel) => void;
	removeQuestion: (questionId: QuestionId) => void;
	setScore: (questionId: QuestionId, score: number) => void;
}

export const InterviewQuestionSheetContext =
	React.createContext<InterviewQuestionSheetContextValue>(undefined);
