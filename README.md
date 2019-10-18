## 搭建react组件库的脚手架
公司刚好需要搭建内部的组件库，借这个机会，自己先尝试下如何搭建组件库。

## 流程
使用rollup构建不同模块的组件，分别配置打包js和css的环境，打包后生成es和lib目录，分别打包了es模块和cjs模块。

组件文档采用docz查看，但是docz在预览代码不太友好，所以打算公司的组件库使用bisheng或者storybook。

## 命令行
npm run build 构建
npm run docz:dev 预览

## 提示
还没有集成ts，单元测试