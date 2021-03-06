import rollup_base from './rollup.base.config.js';
import {
  terser,
} from 'rollup-plugin-terser';

export default {
  ...rollup_base,
  plugins: [
    ...rollup_base.plugins,
    terser()
  ]
}

/* 
export default {
  input: './src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    file: 'public/bundle.js',
    name: 'app'
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
    }),
    svelte({
      // enable run-time checks when not in production
      dev: true,
      customElement: true
    }),
    terser()
  ]
}; */