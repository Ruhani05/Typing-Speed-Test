import { PageTitles } from "../constants";
export const loadHomePage = () => {
  document.title = PageTitles.HOME;
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1>🔥 Typing Speed Game 🔥</h1>
      <p>Select your level:</p>
      <div class="levels">
        <button id="start-easy">Easy</button> 

<button id="start-medium">Medium</button> 

<button id="start-hard">Hard</button> 
      </div>
      <button id="view-results">View Results 📊</button>
    </div>
  `;
['easy', 'medium', 'hard'].forEach(level => { 

  document.querySelector(`#start-${level}`).addEventListener('click', () => startLevel(level)); 

}); 

document.querySelector('#view-results').addEventListener('click', viewResults); 
}
