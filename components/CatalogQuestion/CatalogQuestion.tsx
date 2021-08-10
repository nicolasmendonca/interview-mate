import React from 'react';
import { Icon, IconButton, HStack, Box, Divider, useColorModeValue } from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp, FiPlus } from 'react-icons/fi';

import { SpacedRoundedBox } from '../shared';
import { MarkdownRenderer } from '../MarkdownRenderer';

export interface CatalogQuestionProps {
	question: string;
	isExpanded: boolean;
	onAddToInterviewClick: () => void;
	onExpandToggle: () => void;
}

export const CatalogQuestion: React.FC<CatalogQuestionProps> = ({
	question,
	onAddToInterviewClick,
	onExpandToggle,
	isExpanded,
}) => {
	const cardBgColor = useColorModeValue('white', 'gray.800');

	return (
		<SpacedRoundedBox
			bgColor={cardBgColor}
			borderColor="blue.200"
			borderStyle="dashed"
			borderWidth={2}
			boxShadow="lg"
		>
			<HStack alignItems="center">
				<IconButton
					aria-label={isExpanded ? 'Collapse' : 'Expand'}
					fontSize="lg"
					icon={isExpanded ? <FiChevronUp aria-hidden /> : <FiChevronDown aria-hidden />}
					variant="ghost"
					onClick={onExpandToggle}
				/>
				<Box width="full">
					<MarkdownRenderer>{question}</MarkdownRenderer>
				</Box>
				<IconButton
					aria-label="Add to interview"
					colorScheme="purple"
					fontSize="lg"
					icon={<Icon aria-hidden as={FiPlus} />}
					variant="ghost"
					onClick={onAddToInterviewClick}
				/>
			</HStack>
			{isExpanded && (
				<Box>
					<Divider pt={4} />
					<Box py={4}>
						<MarkdownRenderer>
							{
								'`useState` is used for single pieces of state. When there is a complex piece of state, its better to use `useReducer`'
							}
						</MarkdownRenderer>
					</Box>
				</Box>
			)}
		</SpacedRoundedBox>
	);
};
