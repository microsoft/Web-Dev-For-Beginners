// DOM Elements
const quoteDisplayElement = document.getElementById('quote-display');
const typedValueElement = document.getElementById('typed-value');
const messageElement = document.getElementById('message');
const actionButton = document.getElementById('action-button');

// Game Variables
const quotes = [
  'The quick brown fox jumps over the lazy dog.',
  'Technology is best when it brings people together.',
  'It is not the mountain we conquer but ourselves.',
  'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
];
const messages = {
  start: 'Type the quote above...',
  success: (seconds) => `🎉 CONGRATULATIONS! You finished in ${seconds} seconds.`,
  typing: 'Keep going...'
};
let words = [];
let wordIndex = 0;
let startTime = Date.now();

// --- MODIFIED ---: The startGame function
const startGame = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  words = quote.split(' ');
  wordIndex = 0;
  
  const spanWords = words.map(word => `<span>${word} </span>`);
  quoteDisplayElement.innerHTML = spanWords.join('');
  quoteDisplayElement.childNodes[0].className = 'highlight';

  messageElement.textContent = messages.start;
  typedValueElement.value = '';
  typedValueElement.disabled = false;
  typedValueElement.focus();

  // --- MODIFIED ---: Update the button to be a 'Reset' button
  actionButton.textContent = 'Reset';
  actionButton.className = 'btn-reset';

  startTime = new Date().getTime();
};

// Main Game Logic
typedValueElement.addEventListener('input', () => {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // --- THIS IS THE SUCCESS CONDITION BLOCK ---
    const elapsedTime = new Date().getTime() - startTime;
    const seconds = (elapsedTime / 1000).toFixed(2);
    messageElement.textContent = messages.success(seconds);
    
    typedValueElement.disabled = true; // Disable input as before
    
    // --- MODIFIED ---: Update the button to be a 'Play Again' button
    actionButton.textContent = 'Play Again';
    actionButton.className = 'btn-success';
    actionButton.focus();

  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // Word typed correctly, move to the next word
    typedValueElement.value = '';
    wordIndex++;
    
    // Reset highlighting
    Array.from(quoteDisplayElement.childNodes).forEach(child => (child.className = ''));
    quoteDisplayElement.childNodes[wordIndex].className = 'highlight';

  } else if (currentWord.startsWith(typedValue)) {
    // Correctly typing the current word
    quoteDisplayElement.childNodes[wordIndex].className = 'highlight';
    messageElement.textContent = messages.typing;
  } else {
    // Incorrect typing
    quoteDisplayElement.childNodes[wordIndex].className = 'highlight word-incorrect';
    messageElement.textContent = messages.typing;
  }
});

// --- MODIFIED ---: Event listener for the single action button
actionButton.addEventListener('click', startGame);
