# Vanilla JS TypeScript Boilerplate with Vite

This is a basic boilerplate for a Vanilla JS project using TypeScript and [Vite](https://github.com/vitejs/vite) as the development server. It includes a basic file structure and Vite setup, and necessary dependencies for Vanilla JS.

- This boilerplate is structured with *.js files.
- If you intend to use it for JavaScript projects or proofs of concept (POCs), you can use it as is.
- If you need it for a TypeScript project or POC, simply rename the *.js files to *.ts files. The boilerplate is already configured with the TypeScript package, so no additional installation or configuration is needed.

## Getting Started

1.  Clone the repository: `git clone https://covalience.visualstudio.com/Dev%20Vault/_git/vanilla-javascript-boilerplate`
2.  Install dependencies: `npm install` or `yarn install`
3.  Start the development server: `npm run dev` or `yarn dev`

## File Structure

- `src`: This folder contains the source code for the application.
  - `main.js`: This is the entry point for the application.
  - `style`: This folder contains all the CSS files being used in project.
- `public`: This folder contains assets that are never referenced in source code (e.g. robots.txt).
- `vite.config.js`: This is the Vite configuration file and transpiling the codebase.
- `eslintrc.json`: This is the ESLint configuration file.
- `prettierrc`: This is the Prettier configuration file.

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

## Conclusion

This is a minimal boilerplate that should help you quickly set up a new Vanilla JS project using TypeScript and Vite. You can always add more features and dependencies to your liking, but this should be enough to get you started. Happy coding!