/*
 * @Description: 单独解析样式配置
 * @Author: 徐晨 
 * @Date: 2019-10-18 16:33:45 
 * @Last Modified by: danding
 * @Last Modified time: 2019-10-18 16:41:03
 */

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import clear from 'rollup-plugin-clear';
import postcss from 'rollup-plugin-postcss';
import { eslint } from 'rollup-plugin-eslint';
import entrys from './entrys';

const styleDirs = Object.keys(entrys.styleEntrys)
const createConfig = (format, dir) => {
  const styleConfig = styleDirs.map(i => {
    return {
      input: entrys.styleEntrys[i],
      output: [
        {
          file: `garbage/${i}.js`,
          format,
        },
      ],
      plugins: [
        clear({
          targets: ['garbage'], // 无用的文件
        }),
        eslint({
          fix: true,
          include: ['src/**/*.js']
        }),
        resolve(), // 查找node_modules中的外部模块
        babel({
          exclude: '**/node_modules/**',
          runtimeHelpers: true
        }),
        postcss({
          minimize: true,
          extensions: ['.less', '.css'],
          use: [
            ['less', {
              javascriptEnabled: true
            }]
          ],
          extract: `./${dir}/${i}/style/index.css`,
          inject: false 
        }),
        commonjs() // 将 CommonJS 模块转换成 ES6 模块（Rollup只能解析ES6模块）
      ]
    }
  })

  return styleConfig
}

export default [...createConfig('es', 'es'), ...createConfig('cjs', 'lib')];


