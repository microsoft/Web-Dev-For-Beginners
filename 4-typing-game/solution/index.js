const quotes = [
	'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
	'There is nothing more deceptive than an obvious fact.',
	'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
	'I never make exceptions. An exception disproves the rule.',
	'What one man can invent another can discover.',
	'Nothing clears up a case so much as stating it to another person.',
	'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

// Game state
let words = [];
let wordIndex = 0;
let startTime = Date.now();
let timerId = null;
let timeLeft = 30;
let gameActive = false;

// UI elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');

// 🕒 Start Timer
function startTimer() {
	timeLeft = 30;
	timerElement.textContent = `Time left: ${timeLeft}s`;

	timerId = setInterval(() => {
		timeLeft--;
		timerElement.textContent = `Time left: ${timeLeft}s`;

		if (timeLeft <= 0) {
			clearInterval(timerId);
			endGame(false); // time out
		}
	}, 1000);
}

// 🔚 End Game
function endGame(success) {
	gameActive = false;
	clearInterval(timerId);
	typedValueElement.disabled = true;

	if (success) {
		const elapsedTime = new Date().getTime() - startTime;
		messageElement.innerText = `🎉 CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
	} else {
		messageElement.innerText = '⏰ Time is up! Try again.';
	}
}

// 🟢 Start Button Click
startButton.addEventListener('click', function () {
	// Pick a random quote
	const quoteIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quoteIndex];

	// Prepare game state
	words = quote.split(' ');
	wordIndex = 0;
	typedValueElement.disabled = false;
	typedValueElement.value = '';
	typedValueElement.focus();
	messageElement.innerText = '';
	gameActive = true;

	// Setup quote
	const spanWords = words.map(word => `<span>${word} </span>`);
	quoteElement.innerHTML = spanWords.join('');
	quoteElement.childNodes[0].className = 'highlight';

	// Start game logic
	startTime = new Date().getTime();
	startTimer();
});

// 🎯 Typing Handler
typedValueElement.addEventListener('input', () => {
	if (!gameActive) return;

	const currentWord = words[wordIndex];
	const typedValue = typedValueElement.value;

	if (typedValue === currentWord && wordIndex === words.length - 1) {
		endGame(true);
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
