import React from 'react';
import { Icon, IconButton, HStack, Box } from '@chakra-ui/react';
import { FiChevronDown, FiPlus } from 'react-icons/fi';

import { SpacedRoundedBox } from '../shared';
import { QuestionMarkdown } from '../QuestionMarkdown';

export interface CatalogQuestionProps {
	question: string;
	isExpanded: boolean;
	onAddToInterviewClick: () => void;
}

export const CatalogQuestion: React.FC<CatalogQuestionProps> = ({
	question,
	onAddToInterviewClick,
	isExpanded,
}) => {
	return (
		<SpacedRoundedBox
			bgColor="white"
			borderColor="blue.200"
			borderStyle="dashed"
			borderWidth={2}
			boxShadow="lg"
		>
			<HStack>
				<IconButton
					aria-label={isExpanded ? 'Collapse' : 'Expand'}
					fontSize="lg"
					icon={<FiChevronDown aria-hidden />}
					variant="ghost"
				/>
				<Box width="full">
					<QuestionMarkdown>{question}</QuestionMarkdown>
				</Box>
				<IconButton
					aria-label="Add to interview"
					color="gray.300"
					fontSize="lg"
					icon={<Icon aria-hidden as={FiPlus} />}
					variant="ghost"
					onClick={onAddToInterviewClick}
				/>
			</HStack>
		</SpacedRoundedBox>
	);
};
