/* eslint-disable no-console */
import React from 'react';
import {
	Box,
	Button,
	chakra,
	HStack,
	useColorModeValue,
	useTheme,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Textarea,
	FormControl,
	FormLabel,
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Creatable from 'react-select/creatable';

import { BoxWithPadding } from '../../components/shared';
import { CategoryId } from '../../domain/CategoryModel';
import {
	InterviewQuestionSheet,
	InterviewQuestionSheetProvider,
} from '../../application/InterviewQuestionSheet';
import { QuizPositionName } from '../../domain/QuizModel';
import { QuestionModel } from '../../domain/QuestionModel';
import { QuestionsCatalog } from '../../application/questions-catalog/QuestionsCatalog';
import { questionsCatalogInteractors } from '../../application/services';
import { QuestionCategoryJson } from '../../entities/QuestionCategory';

type Question = string;
type Help = string;

const HalfSection = chakra(Box, {
	baseStyle: {
		height: '100vh',
		overflowY: 'scroll',
		position: 'relative',
		px: 6,
	},
});

const CreatableSelect = chakra(Creatable);

interface InterviewMateProps {
	categoriesJson: QuestionCategoryJson[];
	positionName: QuizPositionName;
	interviewQuestions: QuestionModel;
}

const InterviewMate: React.FC<InterviewMateProps> = ({ categoriesJson }) => {
	const theme = useTheme();
	const newQuestionModal = useDisclosure();
	const bgColor = useColorModeValue('bg', 'gray.700');
	const secondaryBgColor = useColorModeValue(theme.colors.secondary, 'gray.900');
	const leftSectionWidth = 40; // %

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleQuestionCreate = (question: Question, help: Help, categoryId: CategoryId) => {
		// TODO: implement
	};

	return (
		<HStack alignItems="flex-start" bgColor={bgColor} className="InterviewMate" spacing={0}>
			<InterviewQuestionSheetProvider>
				<HalfSection
					bgGradient={`linear-gradient(156.03deg, ${theme.colors.brand} 13.07%, ${secondaryBgColor} 100%);`}
					width={['100%', `${leftSectionWidth}%`]}
				>
					<QuestionsCatalog categoriesJson={categoriesJson} onCreateNewClick={console.warn} />
				</HalfSection>
				<HalfSection width={['100%', `${100 - leftSectionWidth}%`]}>
					<BoxWithPadding minWidth="container.xs">
						<InterviewQuestionSheet />
					</BoxWithPadding>
				</HalfSection>
			</InterviewQuestionSheetProvider>

			<Modal isOpen={newQuestionModal.isOpen} onClose={newQuestionModal.onClose}>
				<ModalOverlay />
				<ModalContent
					as="form"
					onSubmit={(e: any) => {
						e.preventDefault();
						const { categoryId, question, help } = e.target.elements;

						handleQuestionCreate(question.value, help.value, categoryId.value);
					}}
				>
					<ModalHeader>Create new question</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box>
							<FormControl isRequired id="question" name="question">
								<FormLabel>Question</FormLabel>
								<Textarea label="question" rows={2} />
							</FormControl>
							<FormControl id="help" mt={4} name="help">
								<FormLabel>
									Help Text{' '}
									<Box as="span" color="gray.500" fontWeight="400">
										(optional)
									</Box>
								</FormLabel>
								<Textarea label="Question" rows={5} />
							</FormControl>
							<FormControl id="categoryId" mt={4} name="categoryId">
								<FormLabel>Question Category</FormLabel>
								<CreatableSelect
									isClearable
									className="creatable-select"
									id="categoryId"
									name="categoryId"
									options={[{ label: 'a', value: '1' }]}
								/>
							</FormControl>
						</Box>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="green" mr={3} type="submit" onClick={newQuestionModal.onClose}>
							Create
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</HStack>
	);
};

export default InterviewMate;

export const getStaticProps: GetStaticProps = async () => {
	const categoriesJson = await questionsCatalogInteractors.fetchQuestionsCatalog();

	return {
		props: { categoriesJson },
		revalidate: 1,
	};
};
