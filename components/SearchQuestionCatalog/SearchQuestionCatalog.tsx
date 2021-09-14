import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const SearchQuestionCatalog: React.FC<{
	query: string;
	onQueryChange: (query: string) => void;
}> = ({ query, onQueryChange }) => {
	return (
		<InputGroup>
			<InputLeftElement pointerEvents="none">
				<FiSearch aria-label="Search icon" color="white" />
			</InputLeftElement>
			<Input
				color="white"
				placeholder="Search questions..."
				value={query}
				variant="flushed"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onQueryChange(e.target.value)}
			/>
		</InputGroup>
	);
};
