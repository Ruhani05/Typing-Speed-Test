export function loadHomePage() {
  document.title = 'Typing Speed Game 🏎️';
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1>🔥 Typing Speed Game 🔥</h1>
      <p>Select your level:</p>
      <div class="levels">
        <button onclick="startLevel('easy')">Easy</button>
        <button onclick="startLevel('medium')">Medium</button>
        <button onclick="startLevel('hard')">Hard</button>
      </div>
      <button onclick="viewResults()">View Results 📊</button>
    </div>
  `;
}
