import React from 'react';
import { Icon, IconButton, HStack, Box, Divider, useColorModeValue } from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp, FiPlus } from 'react-icons/fi';

import { SpacedRoundedBox } from '../shared';
import { MarkdownRenderer } from '../MarkdownRenderer';

export interface CatalogQuestionProps {
	question: string;
	help?: string;
	isExpanded: boolean;
	onAddToInterviewClick: () => void;
	onExpandToggle: () => void;
}

export const CatalogQuestion: React.FC<CatalogQuestionProps> = ({
	question,
	help,
	onAddToInterviewClick,
	onExpandToggle,
	isExpanded,
}) => {
	const isExpandible = Boolean(help);
	const cardBgColor = useColorModeValue('white', 'gray.700');

	return (
		<SpacedRoundedBox
			bgColor={cardBgColor}
			borderColor="blue.200"
			borderStyle="dashed"
			borderWidth={2}
			boxShadow="lg"
		>
			<HStack alignItems="center">
				{isExpandible ? (
					<IconButton
						aria-label={isExpanded ? 'Collapse' : 'Expand'}
						fontSize="lg"
						icon={isExpanded ? <FiChevronUp aria-hidden /> : <FiChevronDown aria-hidden />}
						variant="ghost"
						onClick={onExpandToggle}
					/>
				) : (
					<Box px={5} py={4} />
				)}
				<Box fontWeight="600" width="full">
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
			{isExpandible && isExpanded && (
				<Box>
					<Divider pt={4} />
					<Box px={6} py={4}>
						<MarkdownRenderer>{help}</MarkdownRenderer>
					</Box>
				</Box>
			)}
		</SpacedRoundedBox>
	);
};
