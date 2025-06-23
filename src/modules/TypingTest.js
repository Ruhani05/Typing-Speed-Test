import { LEVEL_TIME } from "../constants";
import {QUOTES } from "../constants";
export class TypingTest {
  constructor(level, timeLimit = 60) {
    this.level = level;
    this.timeLimit = LEVEL_TIME[level] || timeLimit; // Default to 60 seconds if level not found
    this.timer = this.timeLimit;
    this.timerInterval = null;
    this.quote = '';
    this.currentIndex = 0;

    this.quoteDisplay = document.getElementById('quoteDisplay');
    this.quoteInput = document.getElementById('quoteInput');
    this.timerEl = document.getElementById('timer');
    this.wpmEl = document.getElementById('wpm');
    this.cpmEl = document.getElementById('cpm');
    this.accuracyEl = document.getElementById('accuracy');
    this.startBtn = document.getElementById('startBtn');

    this.startBtn.addEventListener('click', () => this.initGame());
    this.quoteInput.addEventListener('input', () => this.handleInput());
  }

  getRandomQuote() {
    const pool = this.level === 'easy' ? QUOTES.easy : this.level === 'medium' ? QUOTES.medium : QUOTES.hard;
    const index = Math.floor(Math.random() * pool.length);
    return pool[index];
  }

  renderQuote(quote) {
    this.quoteDisplay.innerHTML = '';
    quote.split('').forEach(char => {
      const span = document.createElement('span');
      span.innerText = char;
      this.quoteDisplay.appendChild(span);
    });
  }

  initGame() {
    clearInterval(this.timerInterval);
    this.quote = this.getRandomQuote();
    this.renderQuote(this.quote);
    this.quoteInput.value = '';
    this.timer = this.level === 'easy' ? 60 : this.level === 'medium' ? 80 : 100;
    this.timerEl.innerText = this.timer;
    this.wpmEl.innerText = 0;
    this.cpmEl.innerText = 0;
    this.accuracyEl.innerText = '0%';

    this.quoteInput.disabled = false;
    this.quoteInput.focus();

    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timer--;
      this.timerEl.innerText = this.timer;
      window.activeTimer = this.timerInterval;

      if (this.timer <= 0) {
        clearInterval(this.timerInterval);
        this.finishTest();
      }
    }, 1000);
  }

  handleInput() {
  const quoteText = this.quote;
  const quoteWords = quoteText.split(' ');
  const quoteSpans = this.quoteDisplay.querySelectorAll('span');
 
  const userInput = this.quoteInput.value;
  const userWords = userInput.split(' ');
 
  let correctChars = 0;
  let totalTyped = userInput.length;
  let spanIndex = 0;
 
 
  quoteSpans.forEach(span => span.classList.remove('correct', 'incorrect'));
 
  quoteWords.forEach((word, wordIndex) => {
    const userWord = userWords[wordIndex] || '';
   
    for (let i = 0; i < word.length; i++) {
      const quoteChar = word[i];
      const userChar = userWord[i];
 
      const span = quoteSpans[spanIndex];
 
      if (userChar == null) {
     
        span.classList.remove('correct', 'incorrect');
      } else if (userChar === quoteChar) {
        span.classList.add('correct');
        span.classList.remove('incorrect');
        correctChars++;
      } else {
        span.classList.add('incorrect');
        span.classList.remove('correct');
      }
 
      spanIndex++;
    }
 
   
    const spaceSpan = quoteSpans[spanIndex];
    if (spaceSpan) {
      const userSpaceChar = userWord.length === word.length ? userWords[wordIndex + 1] !== undefined ? ' ' : '' : '';
      if (userSpaceChar === ' ') {
        spaceSpan.classList.add('correct');
        correctChars++;
      } else if (userInput.length > spanIndex) {
        spaceSpan.classList.add('incorrect');
      } else {
        spaceSpan.classList.remove('correct', 'incorrect');
      }
      spanIndex++;
    }
  });
 
 
  const allCorrect = userInput === quoteText;
 
  if (allCorrect) {
    clearInterval(this.timerInterval);
    this.updateStats(correctChars, totalTyped);
    this.finishTest();
  }
 
  this.updateStats(correctChars, totalTyped);
}

  updateStats(correctChars, totalTyped) {
    const timeUsed = this.timeLimit - this.timer;
    const minutes = timeUsed / 60 || 1 / 60;
    const wpm = Math.round((correctChars / 5) / minutes);
    const cpm = Math.round(correctChars / minutes);
    const accuracy = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 0;

    this.wpmEl.innerText = wpm;
    this.cpmEl.innerText = cpm;
    this.accuracyEl.innerText = `${accuracy}%`;
  }

  finishTest() {
    this.quoteInput.disabled = true;
    this.startBtn.innerText = 'Restart Test';

    const timeUsed = this.timeLimit - this.timer;
    const wpm = parseInt(this.wpmEl.innerText);
    const accuracy = parseInt(this.accuracyEl.innerText);

    const results = JSON.parse(sessionStorage.getItem('testResults')) || [];
    results.push({
      level: this.level,
      wpm: wpm,
      accuracy: accuracy,
      time: timeUsed
      //timeUsed
    });
    sessionStorage.setItem('testResults', JSON.stringify(results));
  }
}
// This class handles the typing test logic, including starting the game, handling input, and calculating stats.
// It uses sessionStorage to save results for later retrieval in the results page.
