import OMT from '@surma/rollup-plugin-off-main-thread';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
export default {
  input: ['src/dapp-root.js'],
  output: {
    format: 'amd',
    dir: 'dist'
  },
  plugins: [
    commonjs({
      include: 'node_modules/**/*',
    }),
    resolve({preferBuiltins: true,mainFields: ['module', 'main']}),
      OMT(),
      json(),
    copy({
      targets: [
        {src:'./manifest.json', dest:'dist'},
        { src: 'assets/**/*', dest: 'dist/assets' }
      ]
    })
  ]
}