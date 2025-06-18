// This file is the entry point for the application.

import { loadHomePage } from './modules/home.js';
import { loadGamePage } from './modules/game.js';
import { loadResultsPage } from './modules/results.js';

function router() {
  const hash = window.location.hash || '#home';

  if (hash === '#home') {
    loadHomePage();
  } else if (hash === '#game') {
    loadGamePage();
  } else if (hash === '#results') {
    loadResultsPage();
  } else {
    // fallback
    loadHomePage();
  }
}

// On first load
window.addEventListener('DOMContentLoaded', router);

// On back/forward navigation
window.addEventListener('hashchange', router);

// Nav functions:
window.startLevel = (level) => {
  sessionStorage.setItem('selectedLevel', level);
  window.location.hash = '#game';
};

window.viewResults = () => {
  window.location.hash = '#results';
};

window.goHome = () => {
  window.location.hash = '#home';
};
// Initialize the app