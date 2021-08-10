import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CatalogQuestion } from './CatalogQuestion';

type CatalogQuestionType = typeof CatalogQuestion;

export default {
	title: 'InterviewBuilder/CatalogQuestion',
	component: CatalogQuestion,
	args: {
		question: 'Compare `useState` vs `useReducer`',
		isExpanded: false,
	},
} as ComponentMeta<CatalogQuestionType>;

const Template: ComponentStory<CatalogQuestionType> = (args) => {
	const [isExpanded, setIsExpanded] = React.useState<boolean>(args.isExpanded);

	React.useEffect(() => {
		setIsExpanded(args.isExpanded);
	}, [args.isExpanded, setIsExpanded]);

	const onExpandToggle = () => {
		args.onExpandToggle();
		setIsExpanded(!isExpanded);
	};

	return <CatalogQuestion {...args} isExpanded={isExpanded} onExpandToggle={onExpandToggle} />;
};

export const basic = Template.bind({});
basic.args = {};
