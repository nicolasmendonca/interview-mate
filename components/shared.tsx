import React from 'react';
import { Box, ChakraProps } from '@chakra-ui/react';

export const BoxWithPadding: React.FC<ChakraProps> = (props) => <Box p={6} {...props} />;
export const SpacedRoundedBox: React.FC<ChakraProps> = (props) => (
	<Box borderRadius={5} p={6} {...props} />
);

export const BoxWithMargin: React.FC<ChakraProps> = (props) => {
	return <Box my={4} {...props} />;
};
