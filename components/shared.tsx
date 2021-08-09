import { chakra, Box } from '@chakra-ui/react';

export const BoxWithPadding = chakra(Box, {
	baseStyle: {
		p: 6,
	},
});

export const SpacedRoundedBox = chakra(Box, {
	baseStyle: {
		borderRadius: 5,
		p: 6,
	},
});

export const BoxWithMargin = chakra(Box, {
	baseStyle: {
		my: 4,
	},
});
