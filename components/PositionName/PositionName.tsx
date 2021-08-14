import React from 'react';
import {
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	HStack,
	IconButton,
	useEditableControls,
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';

function EditableControls() {
	const { isEditing, getEditButtonProps } = useEditableControls();

	return isEditing ? null : (
		<Flex justifyContent="center">
			<IconButton
				aria-label="Edit"
				colorScheme="purple"
				icon={<FiEdit />}
				size="sm"
				variant="outline"
				{...getEditButtonProps()}
			/>
		</Flex>
	);
}

interface PositionNameProps {
	editableProps: React.ComponentProps<typeof Editable>;
}

export const PositionName: React.FC<PositionNameProps> = ({ editableProps }) => {
	return (
		<Editable fontSize="4xl" fontWeight="bold" {...editableProps}>
			<HStack>
				<EditablePreview />
				<EditableInput />
				<EditableControls />
			</HStack>
		</Editable>
	);
};
