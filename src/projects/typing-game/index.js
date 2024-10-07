const quotes = [
  'Programs must be written for people to read, and only incidentally for machines to execute.',
  'The most disastrous thing you can ever learn is your first programming language.',
  'The only way to learn a new programming language is by writing programs in it.',
  'Code is like humor. When you have to explain it, it is bad.',
  'Experience is the name everyone gives to their mistakes.',
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteEl = document.querySelector('#quoteEl');
const messageEl = document.querySelector('#messageEl');
const inputEl = document.querySelector('#inputEl');

document.querySelector('#startBtn').addEventListener('click', startGame);

inputEl.addEventListener('input', () => {
  const currentWord = words[wordIndex];
  const typedValue = inputEl.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    const elapsedTime = new Date().getTime() - startTime;

    const message = `Congrats! Your speed is ${calculateWPM(words.length, elapsedTime / 1000)} wpm.`;
    messageEl.innerText = message;
    inputEl.value = '';
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    inputEl.value = '';
    wordIndex++;

    for (const wordElement of quoteEl.childNodes) {
      wordElement.className = '';
    }

    quoteEl.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    inputEl.className = '';
  } else {
    inputEl.className = 'error';
  }
});

function startGame() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  words = quote.split(' ');
  wordIndex = 0;

  const spanWords = words.map((word) => `<span>${word} </span>`);

  quoteEl.innerHTML = spanWords.join('');
  quoteEl.childNodes[0].className = 'highlight';
  messageEl.innerText = '';

  inputEl.value = '';
  inputEl.focus();

  startTime = new Date().getTime();
}

function calculateWPM(wordsTyped, timeSeconds) {
  let timeMinutes = timeSeconds / 60;
  let wpm = wordsTyped / timeMinutes;
  return wpm.toFixed();
}
