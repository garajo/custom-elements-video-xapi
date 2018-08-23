import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    file: 'public/bundle.js',
    name: 'app'
  },
  // treeshake: false,
  plugins: [

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
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
      cacheRoot: `${require('temp-dir')}/.rpt2_cache`,
    }),
    svelte({
      // enable run-time checks when not in production
      dev: true,
      customElement: true
    }),
    serve({
      contentBase: 'public',
      port: 5000
    }),
    livereload({
      watch: 'public',
      verbose: false,
    }),
  ]
};