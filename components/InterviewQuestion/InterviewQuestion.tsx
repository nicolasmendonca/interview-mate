import React from 'react';
import {
	HStack,
	Icon,
	IconButton,
	InputGroup,
	Input,
	InputRightAddon,
	Box,
	useColorModeValue,
	Divider,
} from '@chakra-ui/react';
import { FiTrash } from 'react-icons/fi';
import { GrDrag } from 'react-icons/gr';

import { SpacedRoundedBox } from '../shared';
import { MarkdownRenderer } from '../MarkdownRenderer';

type Score = number;

interface InterviewQuestionProps {
	question: string | null;
	score: Score;
	help?: string | null;
	onScoreChange: (score: Score) => void;
	onRemove: () => void;
}

export const InterviewQuestion: React.FC<InterviewQuestionProps> = ({
	question,
	help,
	score,
	onScoreChange,
	onRemove,
}) => {
	const cardBgColor = useColorModeValue('white', 'gray.800');
	const dragIconColor = useColorModeValue('gray.700', 'gray.300');

	return (
		<SpacedRoundedBox
			bgColor={cardBgColor}
			borderColor="blue.200"
			borderStyle="dashed"
			borderWidth={2}
			boxShadow="lg"
		>
			<HStack>
				<Icon
					__css={{
						path: {
							stroke: dragIconColor,
						},
					}}
					aria-label="Sort"
					as={GrDrag}
					cursor="move"
				/>
				<Box width="full">
					<MarkdownRenderer>{question}</MarkdownRenderer>
				</Box>
				<IconButton
					aria-label="expand"
					colorScheme="red"
					fontSize="lg"
					icon={<Icon aria-hidden as={FiTrash} />}
					variant="ghost"
					onClick={onRemove}
				/>
			</HStack>
			{help && (
				<Box>
					<Divider pb={4} />
					<Box p={4} width="full">
						<MarkdownRenderer>{help}</MarkdownRenderer>
					</Box>
				</Box>
			)}
			<HStack as="form" mt={4} spacing={4}>
				<InputGroup justifyContent="flex-end">
					<Input
						isInvalid={score > 100 || score < 0}
						max={100}
						min={0}
						placeholder="100"
						type="number"
						value={score}
						width={20}
						onChange={(e) => onScoreChange(parseInt(e.target.value))}
					/>
					<InputRightAddon>%</InputRightAddon>
				</InputGroup>
			</HStack>
		</SpacedRoundedBox>
	);
};
