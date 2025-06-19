import { PageTitles } from "../constants";
export const loadResultsPage = () => {
  document.title = PageTitles.RESULTS;
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1>📊 Test Results (This Session)</h1>
      <div id="results"></div>
      <button onclick="goHome()">🏠 Back to Home</button>
      <button id="clearResultsBtn">🗑️ Clear Results</button>
    </div>
  `;

  document.getElementById('clearResultsBtn').addEventListener('click', () => {
    sessionStorage.removeItem('testResults');
    loadResultsPage();
  });

  const resultDiv = document.getElementById('results');
  const results = JSON.parse(sessionStorage.getItem('testResults')) || [];

  if (results.length === 0) {
    resultDiv.innerHTML = '<p>No results yet!</p>';
  } else {
    resultDiv.innerHTML = results.map((r, i) =>
      `<p>#${i+1} | Level: ${r.level} | WPM: ${r.wpm} | Accuracy: ${r.accuracy}% | Time: ${r.time}s</p>`
    ).join('');
  }
}
