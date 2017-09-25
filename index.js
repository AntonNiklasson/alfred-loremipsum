'use strict';

const alfy = require('alfy');
const lorem = require('lorem-ipsum');

const sentence = lorem({
	units: 'sentences',
	count: 1,
	sentenceLowerBound: 5,
  sentenceUpperBound: 10
});
const paragraph = lorem({
	units: 'paragraphs',
	paragraphLowerBound: 3,
	paragraphUpperBound: 6
});

alfy.output([
	{
		title: 'Sentence',
		subtitle: 'Enter to copy the sentence',
		arg: sentence
	},
	{
		title: 'Paragraph',
		subtitle: 'Enter to copy the paragraph',
		arg: paragraph
	}
]);
