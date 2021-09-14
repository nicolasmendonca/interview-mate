import React from 'react';
import { HStack, IconButton, Button, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { CatalogQuestionSearchProvider } from '../CatalogQuestionSearch';
import { BoxWithMargin, BoxWithPadding } from '../../components/shared';
import { SearchQuestionCatalog } from '../../components/SearchQuestionCatalog';
import { CatalogQuestion } from '../CatalogQuestion/CatalogQuestion';
import { QuestionCategoryJson } from '../../entities/QuestionCategory';

import { useQuestionsCatalog } from './useQuestionsCatalog';

interface IQuestionsCatalogProps {
	onCreateNewClick: () => void;
	categoriesJson: QuestionCategoryJson[];
}

export const QuestionsCatalog: React.FC<IQuestionsCatalogProps> = ({
	onCreateNewClick,
	categoriesJson,
}) => {
	const { categories, query, setQuery } = useQuestionsCatalog(categoriesJson);
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<CatalogQuestionSearchProvider categories={categories}>
			<BoxWithPadding minWidth="container.xs">
				<BoxWithMargin mt={10}>
					<HStack>
						<SearchQuestionCatalog query={query} onQueryChange={setQuery} />
						<IconButton
							aria-label="Toggle color mode"
							icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
							onClick={toggleColorMode}
						/>
						<Button colorScheme="green" px={6} onClick={onCreateNewClick}>
							Create new
						</Button>
					</HStack>
				</BoxWithMargin>

				<CatalogQuestion categories={categories} />
			</BoxWithPadding>
		</CatalogQuestionSearchProvider>
	);
};
