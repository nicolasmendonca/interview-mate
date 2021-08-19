import React from 'react';
import {
	Box,
	chakra,
	HStack,
	IconButton,
	useColorMode,
	useColorModeValue,
	useTheme,
} from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { GetStaticProps } from 'next';

import { SearchQuestionCatalog } from '../components/SearchQuestionCatalog';
import { CatalogQuestionSearchProvider } from '../application/CatalogQuestionSearch';
import { BoxWithMargin, BoxWithPadding } from '../components/shared';
import { getQuestionContents } from '../utils/mdxUtils';
import { CategoryModel } from '../domain/CategoryModel';
import { CatalogQuestion } from '../application/CatalogQuestion/CatalogQuestion';
import {
	InterviewQuestionSheet,
	InterviewQuestionSheetProvider,
} from '../application/InterviewQuestionSheet';

const HalfSection = chakra(Box, {
	baseStyle: {
		height: '100vh',
		width: '50%',
		px: 6,
		overflowY: 'scroll',
	},
});

interface InterviewMateProps {
	categories: CategoryModel[];
}

const InterviewMate: React.FC<InterviewMateProps> = ({ categories }) => {
	const theme = useTheme();
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue('bg', 'gray.800');
	const secondaryBgColor = useColorModeValue(theme.colors.secondary, 'gray.900');

	return (
		<HStack alignItems="flex-start" bgColor={bgColor} className="InterviewMate" spacing={0}>
			<InterviewQuestionSheetProvider>
				<HalfSection
					bgGradient={`linear-gradient(156.03deg, ${theme.colors.brand} 13.07%, ${secondaryBgColor} 100%);`}
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
								</HStack>
							</BoxWithMargin>

							<CatalogQuestion />
						</BoxWithPadding>
					</CatalogQuestionSearchProvider>
				</HalfSection>
				<HalfSection>
					<BoxWithPadding minWidth="container.xs">
						<InterviewQuestionSheet />
					</BoxWithPadding>
				</HalfSection>
			</InterviewQuestionSheetProvider>
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
