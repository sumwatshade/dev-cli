import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'

const glob = require('glob')

const files = glob.sync('./src/commands/**/*.ts')
    .map((f) => f.substr(f.indexOf('src/') + 'src/'.length))
console.log(files)
export default files.map(fileName => ({
  input: `src/${fileName}`,
  output: [
    {file: `lib/${fileName}`, name: fileName, format: 'cjs', sourcemap: true},
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({useTsconfigDeclarationDir: true}),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
}));
