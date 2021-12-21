/**
 * @file Newpage quotes script.
 * @author Alexey Ptitsyn <numidium.ru@gmail.com>
 */

import { QuoteItem, quotes } from './quotes';
import { IRandomResult, getRandomFromArray } from './common';

const div: HTMLElement = document.querySelector('#idQuote');
const divQuote: HTMLElement = div.querySelector('.text');
const divAuthor: HTMLElement = div.querySelector('.author-url');

let prevAuthor: number;
let prevQuote: number;

/**
 * Hide quote block.
 */
function hideQuote() {
  return new Promise((resolve) => {
    div.style.opacity = '0';

    function onEnd() {
      div.removeEventListener('transitionend', onEnd);
      resolve(null);
    }
  
    div.addEventListener('transitionend', onEnd);
  });
}

/**
 * Show quote block.
 */
function showQuote() {
  return new Promise((resolve) => {
    div.style.opacity = '1';

    function onEnd() {
      div.removeEventListener('transitionend', onEnd);
      resolve(null);
    }
  
    div.addEventListener('transitionend', onEnd);
  });
}

/**
 * Get a new quote block and show it.
 */
async function getQuote() {
  if(prevAuthor || prevQuote) {
    await hideQuote();
  }

  const authorRandom: IRandomResult = getRandomFromArray(quotes, prevAuthor);
  prevAuthor = authorRandom.rnd;
  const quoteRandom: IRandomResult = getRandomFromArray(authorRandom.result.quotes, prevQuote);
  prevQuote = quoteRandom.rnd;

  const author: QuoteItem = authorRandom.result;
  const quote: string = quoteRandom.result;
  
  divQuote.innerText = quote;
  divAuthor.innerText = author.author;

  await showQuote();
}

/**
 * Main: event listeners and such.
 */
div.addEventListener('click', (e) => {
  getQuote();
});

getQuote();
