import React from 'react';
import {
	Box,
	Button,
	chakra,
	HStack,
	IconButton,
	useColorMode,
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
import { FiSun, FiMoon } from 'react-icons/fi';
import { GetStaticProps } from 'next';
import Creatable from 'react-select/creatable';

import { SearchQuestionCatalog } from '../../components/SearchQuestionCatalog';
import { CatalogQuestionSearchProvider } from '../../application/CatalogQuestionSearch';
import { BoxWithMargin, BoxWithPadding } from '../../components/shared';
import { getQuestionContents } from '../../utils/mdxUtils';
import { CategoryId, CategoryModel } from '../../domain/CategoryModel';
import { CatalogQuestion } from '../../application/CatalogQuestion/CatalogQuestion';
import {
	InterviewQuestionSheet,
	InterviewQuestionSheetProvider,
} from '../../application/InterviewQuestionSheet';
import { QuizPositionName } from '../../domain/QuizModel';
import { QuestionModel } from '../../domain/QuestionModel';

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
	categories: CategoryModel[];
	positionName: QuizPositionName;
	interviewQuestions: QuestionModel;
}

const InterviewMate: React.FC<InterviewMateProps> = ({ categories }) => {
	const theme = useTheme();
	const newQuestionModal = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();
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
					<CatalogQuestionSearchProvider categories={categories}>
						<BoxWithPadding minWidth="container.xs">
							<BoxWithMargin mt={10}>
								<HStack>
									<SearchQuestionCatalog />
									<IconButton
										aria-label="Toggle color mode"
										icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
										onClick={toggleColorMode}
									/>
									<Button colorScheme="green" px={6} onClick={newQuestionModal.onOpen}>
										Create new
									</Button>
								</HStack>
							</BoxWithMargin>

							<CatalogQuestion />
						</BoxWithPadding>
					</CatalogQuestionSearchProvider>
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
	const questions = getQuestionContents();

	const uniqueCategories = Array.from(
		questions.reduce((set, question) => {
			set.add(question.category);

			return set;
		}, new Set<string>())
	);

	const categories: CategoryModel[] = uniqueCategories.map((categoryName) => {
		const categoryQuestions = questions.filter(({ category }) => category === categoryName);

		return {
			id: categoryName,
			name: categoryName,
			questions: categoryQuestions,
		};
	});

	return {
		props: { categories },
		revalidate: 60 * 60 * 24,
	};
};
