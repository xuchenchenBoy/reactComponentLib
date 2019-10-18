/*
 * @Description: 打包js配置
 * @Author: 徐晨 
 * @Date: 2019-10-18 16:34:13 
 * @Last Modified by: danding
 * @Last Modified time: 2019-10-18 17:13:39
 */

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import clear from 'rollup-plugin-clear'
import { eslint } from 'rollup-plugin-eslint';
import entrys from './entrys'

const createConfigs = (isComponent = true) => {
  const entryFileNames = isComponent ? '[name]/index.js' : 'index.js'
  return {
    input: isComponent 
      ? { 
          ...entrys.jsEntrys
        }
      : 'src/index.js',
    external: ['react', 'react-dom', 'prop-types'],
    output: [
      {
        dir: 'es',
        format: 'es',
        sourceMap: true,
        entryFileNames,
        globals: {
          react: 'React',
          "react-dom": 'ReactDom',
          "prop-types": 'PropTypes'
        },
      },
      {
        dir: 'lib',
        name: 'library',
        format: 'cjs',
        sourceMap: true,
        entryFileNames,
        globals: {
          react: 'React',
          "react-dom": 'ReactDom',
          "prop-types": 'PropTypes'
        },
      }
    ],
    plugins: [
      eslint({
        fix: true,
        include: ['src/**/*.js']
      }),
      clear({
        targets: ['es', 'lib', 'garbage']
      }),
      resolve(), // 查找node_modules中的外部模块
      babel({
        exclude: '**/node_modules/**',
        runtimeHelpers: true
      }),
      commonjs(), // 将 CommonJS 模块转换成 ES6 模块（Rollup只能解析ES6模块）
    ]
  }
}

export default [createConfigs(), createConfigs(false)]