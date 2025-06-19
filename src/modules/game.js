import { TypingTest } from './TypingTest.js';
import { PageTitles } from '../constants/index.js';

export const loadGamePage = () => {
  document.title = PageTitles.GAME;
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1 id="levelTitle">Typing Test</h1>
      <div id="quoteDisplay" class="quote-display"></div>
      <textarea id="quoteInput" class="quote-input" placeholder="Start typing..."></textarea>
      <div class="info">
        <div>Time Left: <span id="timer">0</span>s</div>
        <div>WPM: <span id="wpm">0</span></div>
        <div>CPM: <span id="cpm">0</span></div>
        <div>Accuracy: <span id="accuracy">0%</span></div>
      </div>
      <button id="startBtn">Start Test</button>
      <button id="go-home">🏠 Back to Home</button>
    </div>
  `;

  const level = sessionStorage.getItem('selectedLevel') || 'easy';
  document.getElementById('levelTitle').innerText = `Level: ${level.toUpperCase()}`;
  window.typingTest = new TypingTest(level);

  document.querySelector('#go-home').addEventListener('click', goHome);
}
