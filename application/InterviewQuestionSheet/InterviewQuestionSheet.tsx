import React from 'react';
import { Divider } from '@chakra-ui/react';

import { PositionName } from '../../components/PositionName/PositionName';
import { BoxWithMargin } from '../../components/shared';
import { InterviewQuestion } from '../../components/InterviewQuestion';

import { useInterviewQuestionSheet } from './hooks';

interface IInterviewQuestionSheetProps {}

export const InterviewQuestionSheet: React.FC<IInterviewQuestionSheetProps> = () => {
	const { questions, removeQuestion, setScore } = useInterviewQuestionSheet();

	return (
		<>
			<PositionName editableProps={{ defaultValue: 'React Mid. Developer' }} />
			<BoxWithMargin mb={12}>
				<Divider />
			</BoxWithMargin>

			{questions.map((interviewQuestion) => (
				<BoxWithMargin key={interviewQuestion.id}>
					<InterviewQuestion
						help={interviewQuestion.help}
						question={interviewQuestion.question}
						score={interviewQuestion.score}
						onRemove={() => removeQuestion(interviewQuestion.id)}
						onScoreChange={(score: number) => setScore(interviewQuestion.id, score)}
					/>
				</BoxWithMargin>
			))}
		</>
	);
};
