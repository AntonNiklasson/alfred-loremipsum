'use strict';

const alfy = require('alfy');
const lorem = require('lorem-ipsum');

const sentenceLowerBound = 5;
const sentenceUpperBound = 10;
const paragraphLowerBound = 3;
const paragraphUpperBound = 6;

function generateSentenceOutput(count) {
  return {
    title: count > 1 ? `${count} Sentences` : 'Sentence',
    subtitle: 'Press enter to copy',
    arg: lorem({
      units: 'sentences',
      count,
      sentenceLowerBound,
      sentenceUpperBound
    })
  };
}

function generateParagraphOutput(count) {
  return {
    title: count > 1 ? `${count} Paragraphs` : 'Paragraph',
    subtitle: 'Press enter to copy',
    arg: lorem({
      units: 'paragraphs',
      count,
      sentenceLowerBound,
      sentenceUpperBound,
      paragraphLowerBound,
      paragraphUpperBound
    })
  };
}

const count = parseInt(alfy.input) || 1;

alfy.output([
  generateParagraphOutput(count),
  generateSentenceOutput(count)
]);
