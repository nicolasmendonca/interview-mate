import React from 'react';

import { InterviewQuestionSheetContext } from './InterviewQuestionSheetContext';

export function useInterviewQuestionSheet() {
	const interviewQuestionSheetContextValue = React.useContext(InterviewQuestionSheetContext);

	if (interviewQuestionSheetContextValue === undefined) {
		throw new Error('Please wrap with <InterviewQuestionSheetProvider>');
	}

	return interviewQuestionSheetContextValue;
}
