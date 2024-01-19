import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'templates/templateA/worker.js', // Entry point of your application
  output: {
    file: 'templates/templateA/worker.bundle.js', // Name of the bundled file
    format: 'iife', // Output format (IIFE for browser)
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // Exclude external dependencies from being transpiled
    }),
  ],
};