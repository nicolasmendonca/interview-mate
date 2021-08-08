import React from 'react';
import { Code as ChakraCode } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

export const Code: React.FC = ({ children }) => {
	return (
		<ChakraCode bgColor="transparent" color="red.500">
			{children}
		</ChakraCode>
	);
};

interface QuestionMarkdownProps {
	children: string;
}

export const QuestionMarkdown: React.FC<QuestionMarkdownProps> = ({ children }) => {
	return (
		<ReactMarkdown
			components={{
				code: Code,
			}}
		>
			{children}
		</ReactMarkdown>
	);
};
