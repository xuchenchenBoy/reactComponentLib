/*
 * @Description: 解析路径，输入入口路径
 * @Author: 徐晨 
 * @Date: 2019-10-18 16:31:45 
 * @Last Modified by: danding
 * @Last Modified time: 2019-10-18 16:34:10
 */

const fs = require('fs');
const path = require('path')

const rootPath = 'src';
let dirEntrys = fs.readdirSync(path.resolve(rootPath))
dirEntrys = dirEntrys.filter(i => {
  const fileName = path.join(rootPath, i)
  let stats=fs.statSync(fileName);
  return stats.isDirectory()
})

// 打包js入口集合
let jsEntrys = {};
dirEntrys.forEach(i => {
  jsEntrys[i] = `${rootPath}/${i}/index.js`
})

// 打包css入口集合
let styleEntrys = {};
dirEntrys.forEach(i => {
  styleEntrys[i] = `${rootPath}/${i}/style/index.js`
})

export default {
  jsEntrys,
  styleEntrys,
  dirEntrys, // 组件文件夹名集合
}