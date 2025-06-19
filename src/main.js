// This file is the entry point for the application.

import { loadHomePage } from './modules/home.js';
import { loadGamePage } from './modules/game.js';
import { loadResultsPage } from './modules/results.js';
import {  Routes,validLevels } from './constants/index.js';
import { showNotFoundPage } from './modules/notfound.js';

function router() {
  const hash = window.location.hash || Routes.HOME;

 switch (hash) { 

  case Routes.HOME: 

    loadHomePage(); 

    break; 

  case Routes.GAME: 

    loadGamePage(); 

    break; 

  case Routes.RESULTS: 

    loadResultsPage(); 

    break; 

  default: 

    showNotFoundPage(); 

} 
}

// On first load
window.addEventListener('DOMContentLoaded', router);

// On back/forward navigation
window.addEventListener('hashchange', router);

// Nav functions:

window.startLevel = (level) => {
  if (!validLevels.includes(level)) {
    console.error('Invalid level selected:', level);
    showNotFoundPage();
    return;
  }
  sessionStorage.setItem('selectedLevel', level);
  window.location.hash = Routes.GAME;
};

window.viewResults = () => {
  window.location.hash = Routes.RESULTS;
};

window.goHome = () => {
  window.location.hash = Routes.HOME;
};
// Initialize the app