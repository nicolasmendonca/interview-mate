import fs from 'fs';
import path from 'path';

import read from 'fs-readdir-recursive';
import matter from 'gray-matter';

import { QuestionId } from '../domain/QuestionModel';

export const QUESTIONS_PATH = path.join(process.cwd(), 'content/questions');
export const HELP_PATH = path.join(process.cwd(), 'content/help');

export interface QuestionModel {
	id: QuestionId;
	question: string;
	category: string;
	help?: string;
}

export const questionFilePaths = read(QUESTIONS_PATH).filter((path) => path.endsWith('.md'));

/**
 * matter(source) returns the following structure
 * {
 *   content: '\nCompare `useState` vs `useReducer`\n',
 *   data: { help: '/help/usestate-vs-usereducer.md', category: 'React' },
 *   isEmpty: false,
 *   excerpt: ''
 * }
 */
export const getQuestionContents = (): QuestionModel[] => {
	return questionFilePaths.map((questionMdFilePath, i) => {
		const source = fs.readFileSync(path.join(QUESTIONS_PATH, questionMdFilePath), 'utf8');

		// eslint-disable-next-line no-console
		const { content: question, data } = matter(source);
		let help: string | null = null;

		if (data.help) {
			const helpSource = fs.readFileSync(path.join(HELP_PATH, data.help), 'utf8');

			help = matter(helpSource).content;
		}

		return {
			id: `${i}`,
			question,
			category: data.category,
			help,
		};
	});
};
