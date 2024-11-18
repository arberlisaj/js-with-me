const quotes = ['JavaScript is the best programming language in the world.'];

let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', function () {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  words = quote.split(' ');
  wordIndex = 0;

  const spanWords = words.map(function (word) {
    return `<span>${word} </span>`;
  });

  quoteElement.innerHTML = spanWords.join('');
  quoteElement.childNodes[0].className = 'highlight';
  messageElement.innerText = '';
  typedValueElement.value = '';
  typedValueElement.focus();
  startTime = new Date().getTime();
});

typedValueElement.addEventListener('input', (e) => {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    const elapsedTime = new Date().getTime() - startTime;
    // calculate words per minute
    const wpm = Math.round((words.length / elapsedTime) * 60000);
    const message = `Result: ${wpm} wpm`;
    messageElement.innerText = message;
    // clear the input field
    typedValueElement.value = '';
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    typedValueElement.value = '';
    wordIndex++;
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    typedValueElement.className = '';
  } else {
    typedValueElement.className = 'error';
  }
});

// start game on page load
document.getElementById('start').click();

// Ctrl+Enter to reload the game
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && e.ctrlKey) {
    document.getElementById('start').click();
  }
});
