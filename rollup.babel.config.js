import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
export default {
    input: './src/dapp-root.js',
    output: {
      format: 'esm',
      dir: 'dist'
    },
    plugins: [
        babel({
            "babelrc": false,
            "runtimeHelpers": true,
            "plugins": [
                "@babel/plugin-transform-async-to-generator",
                "@babel/plugin-transform-regenerator",
                ["@babel/plugin-transform-runtime", {
                    "helpers": true,
                    "regenerator": true
                }]
            ],
            "presets": [
                "@babel/preset-env"
            ],
            "exclude": "node_modules/**"
        }),
        resolve({
            preferBuiltins:true,
            mainFields: ["jsnext:main","module", "main"]
        }),
        commonjs({
            include: "node_modules/**"
        }),
        json()
    ]
};