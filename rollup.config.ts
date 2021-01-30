import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import esbuild from 'rollup-plugin-esbuild'
const glob = require('glob')

const files = glob.sync('./src/commands/**/*.ts')
.map(f => f.substr(f.indexOf('src/') + 'src/'.length))

export default files.map(fileName => ({
  input: `src/${fileName}`,
  output: [
    {file: `lib/${fileName.replace('.ts', '.js')}`, name: fileName, format: 'cjs'},
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external(id) {
    return [
      '@oclif',
    ].includes(id.split('/')[0])
  },
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    esbuild({
      include: /\.[jt]sx?$/,
      exclude: /node_modules/,
      sourceMap: false,
      minify: false,
    }),
    // typescript(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
  ],
}))
