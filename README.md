# Typing Speed Game

A simple **Typing Speed Game** built with Vanilla JavaScript using a modular structure.  
Single HTML entry (`index.html`) with `main.js` as the entry point and client-side routing to render dynamic views for Home, Game, and Results. Game logic is separated into modules for reusability and clean architecture. Built and served with **Vite**.

## Features
- Single Page App structure (SPA) using client-side routing
- Modular JavaScript: Home, Game, Results components
- Typing speed, accuracy, and stats tracking
- Session-based storage for results
- Responsive and simple UI

## File Structure

- `src`: This folder contains the source code for the application.
  - `main.js`: This is the entry point for the application, used for routing.
  - `style`: This folder contains all the CSS files being used in project.
  - `modules`: This folder contains three js models used in rounting and a TypingTest.js that contains logic following OOPs.
- `public`: This folder contains assets that are never referenced in source code (e.g. robots.txt).
- `vite.config.js`: This is the Vite configuration file and transpiling the codebase.
- `eslintrc.json`: This is the ESLint configuration file.
- `prettierrc`: This is the Prettier configuration file.
- `index.html`: single HTML entry
  
## Getting Started

1.  Clone the repository: `git clone https://github.com/Ruhani05/Typing-Speed-Test`
2.  Install dependencies: `npm install` or `yarn install`
3.  Start the development server: `npm run dev` or `yarn dev`


## Dependencies

- `vite`: A development server that enables fast and efficient development experience.

## Bootstrap Setup

You can include Bootstrap in your project either by installing it via npm/yarn or by using the CDN link.

### Method 1: Package Installation

1. Install Bootstrap using npm or yarn:
   ```bash
   npm install bootstrap
   # or
   yarn add bootstrap
   ```

2. Import Bootstrap CSS in your `main.js` file:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

### Method 2: Using CDN Link

1. Add the Bootstrap CSS link to the `index.html` file:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Vanilla JS TypeScript Boilerplate</title>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
   </head>
   <body>
       <div id="app"></div>
       <script type="module" src="./src/main.js"></script>
   </body>
   </html>
   ```

## Tips

- If you want make changes to development server configuration, you can do so in the `vite.config.js` file.
- Don't forget to run `npm run dev` or `yarn dev` to start the development server and see your application running.

## Interface:
Home page:
![image](https://github.com/user-attachments/assets/325fd475-a3f2-45bf-b925-a5972b019ddd)

Level page: with real time accuracy, WPM, CPM calculator. Character to character matching for every word, also diaplaying which character is wrong/right.
![image](https://github.com/user-attachments/assets/bfb3bf59-89fa-47b1-8f9c-7bdda22a1a4f)
Game stops if either the time is complete/ you have correctly typed all the text.

Results: Storing results of previous games played in session storage.
![image](https://github.com/user-attachments/assets/79a4dcb1-fe99-4533-a5fd-f3109d79d7cc)


