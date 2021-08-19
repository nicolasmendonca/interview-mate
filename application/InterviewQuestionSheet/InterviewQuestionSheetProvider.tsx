import React from 'react';

import { QuestionId, QuestionInterviewModel } from '../../domain/QuestionModel';

import {
	InterviewQuestionSheetContext,
	InterviewQuestionSheetContextValue,
} from './InterviewQuestionSheetContext';

interface InterviewQuestionSheetProviderProps {
	questions?: QuestionInterviewModel[];
}

export const InterviewQuestionSheetProvider: React.FC<InterviewQuestionSheetProviderProps> = ({
	children,
	questions: questionsInitialValue = [],
}) => {
	const [questions, setQuestions] = React.useState<QuestionInterviewModel[]>(questionsInitialValue);

	function hasQuestion(questionId: QuestionId) {
		return questions.find((question) => question.id === questionId);
	}

	function addQuestion(question: QuestionInterviewModel) {
		setQuestions((questions) => [...questions, question]);
	}

	function removeQuestion(questionId: QuestionId) {
		setQuestions((questions) => questions.filter((q) => q.id !== questionId));
	}

	function setScore(questionId: QuestionId, score: number) {
		setQuestions((questions) =>
			questions.map((q) => {
				if (q.id === questionId) {
					return { ...q, score };
				}

				return q;
			})
		);
	}

	const interviewQuestionSheetContextValue: InterviewQuestionSheetContextValue = {
		questions,
		addQuestion,
		hasQuestion,
		removeQuestion,
		setScore,
	};

	return (
		<InterviewQuestionSheetContext.Provider value={interviewQuestionSheetContextValue}>
			{children}
		</InterviewQuestionSheetContext.Provider>
	);
};
