import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // The root directory of the project. By default, Vite assumes your index.html is in the root directory of your project. Adjust this path if your index.html is located elsewhere.
  root: '.',

  // Directory to output the build files
  build: {
    outDir: 'dist',
  },

  // Server options for development
  server: {
    port: 3000,
  },

  // Sets up path aliases to simplify imports in your project. In this example, @ is aliased to the src directory, which can be adjusted based on your project's structure.
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
