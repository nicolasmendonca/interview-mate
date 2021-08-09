/* eslint-disable react/display-name */
import React from 'react';
import { Code as ChakraCode, Heading, Text } from '@chakra-ui/react';
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
				h1: (props: any) => <Heading as="p" fontSize="2xl" my={4} {...props} />,
				h2: (props: any) => <Heading as="p" fontSize="xl" my={4} {...props} />,
				h3: (props: any) => <Heading as="p" fontSize="lg" my={4} {...props} />,
				h4: (props: any) => <Heading as="p" fontSize="md" my={4} {...props} />,
				p: (props: any) => <Text lineHeight={10} {...props} />,
			}}
		>
			{children}
		</ReactMarkdown>
	);
};
