import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { useCatalogQuestionSearch } from '../../application/CatalogQuestionSearch';

export const SearchQuestionCatalog: React.FC = ({}) => {
	const { searchQuery, setSearchQuery } = useCatalogQuestionSearch();

	return (
		<InputGroup>
			<InputLeftElement pointerEvents="none">
				<FiSearch aria-label="Search icon" color="white" />
			</InputLeftElement>
			<Input
				color="white"
				placeholder="Search questions..."
				value={searchQuery}
				variant="flushed"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
			/>
		</InputGroup>
	);
};
