import React from 'react';
import {
	HStack,
	Icon,
	IconButton,
	InputGroup,
	Input,
	InputRightAddon,
	Button,
	Box,
} from '@chakra-ui/react';
import { FiTrash } from 'react-icons/fi';
import { GrDrag } from 'react-icons/gr';

import { SpacedRoundedBox } from '../shared';
import { QuestionMarkdown } from '../QuestionMarkdown';

type Score = number;

interface InterviewQuestionProps {
	question: string | null;
	score: Score;
	onScoreSubmit: (score: Score) => void;
	onRemove: () => void;
}

const parseScore = (score: Score) => ([null, undefined].includes(score) ? '' : `${score}`);

export const InterviewQuestion: React.FC<InterviewQuestionProps> = ({
	question,
	score,
	onScoreSubmit,
}) => {
	const [localScore, setLocalScore] = React.useState(parseScore(score));

	React.useEffect(() => {
		setLocalScore(parseScore(score));
	}, [score, setLocalScore]);

	const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();
		const scoreNumber = parseInt(localScore);

		if (scoreNumber >= 0 && scoreNumber <= 100) {
			onScoreSubmit(scoreNumber);
		}
	};

	return (
		<SpacedRoundedBox
			bgColor="white"
			borderColor="blue.200"
			borderStyle="dashed"
			borderWidth={2}
			boxShadow="lg"
		>
			<HStack>
				<Icon aria-label="Sort" as={GrDrag} cursor="move" />
				<Box width="full">
					<QuestionMarkdown>{question}</QuestionMarkdown>
				</Box>
				<IconButton
					aria-label="expand"
					color="gray.300"
					fontSize="lg"
					icon={<Icon aria-hidden as={FiTrash} />}
					variant="ghost"
				/>
			</HStack>
			<HStack as="form" mt={4} spacing={4} onSubmit={handleSubmit}>
				<InputGroup justifyContent="flex-end">
					<Input
						max={100}
						min={0}
						placeholder="100"
						type="number"
						value={localScore}
						width={20}
						onChange={(e) => setLocalScore(e.target.value)}
					/>
					<InputRightAddon>%</InputRightAddon>
				</InputGroup>
				<Button bgColor="brand" colorScheme="purple">
					Set score
				</Button>
			</HStack>
		</SpacedRoundedBox>
	);
};
