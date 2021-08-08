import {
	Box,
	Button,
	ChakraProps,
	Divider,
	Editable,
	EditableInput,
	EditablePreview,
	Heading,
	HStack,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightAddon,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiChevronDown, FiPlus, FiSearch, FiEdit, FiTrash } from 'react-icons/fi';
import { GrDrag } from 'react-icons/gr';

const HalfSection: React.FC<ChakraProps> = (props) => <Box height="100vh" width="50%" {...props} />;
const BoxWithPadding: React.FC<ChakraProps> = (props) => <Box p={6} {...props} />;
const SpacedRoundedBox: React.FC<ChakraProps> = (props) => (
	<Box borderRadius={5} p={6} {...props} />
);

const CatalogQuestion: React.FC = () => (
	<SpacedRoundedBox
		bgColor="white"
		borderColor="blue.200"
		borderStyle="dashed"
		borderWidth={2}
		boxShadow="lg"
	>
		<HStack>
			<IconButton
				aria-label="expand"
				fontSize="lg"
				icon={<FiChevronDown aria-hidden="true" />}
				variant="ghost"
			/>
			<Text width="full">Compare useState vs useReducer</Text>
			<IconButton
				aria-label="expand"
				color="gray.300"
				fontSize="lg"
				icon={<FiPlus aria-hidden="true" />}
				variant="ghost"
			/>
		</HStack>
	</SpacedRoundedBox>
);

const BoxWithMargin: React.FC<ChakraProps> = (props) => {
	return <Box my={4} {...props} />;
};

const InterviewQuestion: React.FC = () => {
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
				<Text width="full">Compare useState vs useReducer</Text>
				<IconButton
					aria-label="expand"
					color="gray.300"
					fontSize="lg"
					icon={<FiTrash aria-hidden="true" />}
					variant="ghost"
				/>
			</HStack>
			<HStack gap={4} mt={4}>
				<InputGroup justifyContent="flex-end">
					<Input max={100} min={0} placeholder="100" type="number" width={20} />
					<InputRightAddon>%</InputRightAddon>
				</InputGroup>
				<Button bgColor="brand" colorScheme="purple">
					Set score
				</Button>
			</HStack>
		</SpacedRoundedBox>
	);
};

interface IInterviewMateProps {}

const InterviewMate: React.FC<IInterviewMateProps> = () => {
	return (
		<HStack bgColor="bg" className="InterviewMate" spacing={0}>
			<HalfSection bgGradient="linear-gradient(156.03deg, #644BFB 13.07%, #C3B9FF 100%);">
				<BoxWithPadding minWidth="container.xs">
					<InputGroup mt={10}>
						<InputLeftElement pointerEvents="none">
							<FiSearch aria-label="Search icon" color="white" />
						</InputLeftElement>
						<Input color="white" placeholder="Search questions..." variant="flushed" />
					</InputGroup>

					<Heading as="h2" color="white" mb={6} my={12}>
						React
					</Heading>
					<BoxWithMargin>
						<CatalogQuestion />
					</BoxWithMargin>
					<BoxWithMargin>
						<CatalogQuestion />
					</BoxWithMargin>
					<BoxWithMargin>
						<CatalogQuestion />
					</BoxWithMargin>
					<BoxWithMargin>
						<CatalogQuestion />
					</BoxWithMargin>
				</BoxWithPadding>
			</HalfSection>
			<HalfSection>
				<BoxWithPadding minWidth="container.xs">
					<Editable defaultValue="React Mid. Developer" fontSize="4xl" fontWeight="bold">
						<EditablePreview />
						<EditableInput />
						<IconButton aria-label="Edit" icon={<FiEdit aria-hidden={true} />} ml={4} />
					</Editable>
					<BoxWithMargin>
						<Divider />
					</BoxWithMargin>

					<BoxWithMargin>
						<InterviewQuestion />
					</BoxWithMargin>

					<BoxWithMargin>
						<InterviewQuestion />
					</BoxWithMargin>

					<BoxWithMargin>
						<InterviewQuestion />
					</BoxWithMargin>
				</BoxWithPadding>
			</HalfSection>
		</HStack>
	);
};

export default InterviewMate;
