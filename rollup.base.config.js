import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import typescript from 'rollup-plugin-typescript2';
import {
  terser,
} from 'rollup-plugin-terser';

export default {
  input: './src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    file: 'public/bundle.js',
    name: 'app'
  },
  moduleContext: {
    [require.resolve('whatwg-fetch')]: 'window'
  },
  plugins: [
    commonjs({
      include: [
        'node_modules/**',
      ]
    }),
    globals(),
    builtins(),
    resolve({
      preferBuiltins: true,
    }),
    typescript({
      typescript: require('typescript'),
      tsconfig: './tsconfig.json',
    }),
    svelte({
      // enable run-time checks when not in production
      dev: true,
      customElement: true
    }),
  ]
};