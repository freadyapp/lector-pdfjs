import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import { terser } from "rollup-plugin-terser"

import sizes from 'rollup-plugin-sizes';
import json from '@rollup/plugin-json';
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json';

const plugs = [
  //terser(), // mini
  sizes(),
  json(),
  visualizer({
    filename: "docs/stats.html",
    title: "LectorJS-pdfjs Visualised",
    //sourcemap: true
  })
]

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    //external: ['tippy', 'mousetrap', 'animejs' ],
    output: [{
      name: 'lectorPdf',
      file: pkg.browser,
      format: 'umd'
    }, {
			name: 'lectorPdf',
			file: 'docs/scripts/lectorPdf.umd.js',
			format: 'umd'
		}],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
    ].concat(plugs)
  },
  {
    input: 'src/index.js',
    external: [ 'ms' ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [].concat(plugs)
  }
]

