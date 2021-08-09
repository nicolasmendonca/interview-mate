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
	argTypes: {
		onAddToInterviewClick: { action: 'clicked' },
		onExpandToggle: { action: 'clicked' },
	},
} as ComponentMeta<CatalogQuestionType>;

const Template: ComponentStory<CatalogQuestionType> = (args) => <CatalogQuestion {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
