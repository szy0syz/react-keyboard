# react-keyboard
[![Build With Umi](https://img.shields.io/badge/build%20with-umi-028fe4.svg?style=flat-square)](http://umijs.org/)
[![Build With dva](https://img.shields.io/badge/build%20with-dva-028fe4.svg?style=flat-square)](https://dvajs.com/)
[![Build With antd-mobile](https://img.shields.io/badge/build-antd--mobile-green.svg)](https://mobile.ant.design)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]()

> H5端停缴缴费键盘和车牌显示

> 后期点会单独保留h5键盘，然后demo做完成业务还原，最后会抽一份到我的umi区块里。

该项目主要以 [UMI](https://umijs.org/zh/) + [DVA](https://dvajs.com/) 为底层框架，以[Ant Design Mobile](https://mobile.ant.design/)为 UI 组件库，包含完整的前端工程化实践。

![2019](/preview.gif)

## 目录结构

    |-- config                                # umi 配置，包含路由，构建等配置
    |-- mock                                  # 本地模拟数据
    |-- public                                
    |   |-- favicon.png                       # favicon
    |-- src                                   # 
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务通用组件
    |   |-- layout                            # 通用布局
    |   |-- models                            # 全局 dva model
    |   |-- services                          # 后台接口服务
    |   |-- pages                             # 业务页面入口和常用模板
    |   |-- e2e                               # 集成测试用例
    |   |-- global.less                       # 全局样式
    |   |-- global.tsx                         # 全局 JS
    |   |-- theme.js                          
    |-- tests                                 # 测试工具
    |-- .gitignore                            # git忽略文件
    |-- .editorconfig                         # 编辑器代码风格配置
    |-- .eslintignore                         # eslint忽略文件
    |-- .eslintrc                             # eslint规则
    |-- .prettierignore                       # 代码风格配置忽略文件
    |-- .prettierrc                           # 代码风格配置文件
    |-- .stylelintrc                          # 样式风格配置文件
    |-- package.json                          
    |-- README.md                              

## 快速开始

```javascript

// 安装项目
$ git clone --depth=1 https://github.com/hqwlkj/umi-dva-antd-mobile.git my-project

$ cd my-project

// 安装依赖
$ yarn or npm install

// 运行
$ yarn start or npm run start # 访问 http://localhost:8080

// 打包
$ yarn build or npm run build

```
更多命令可在[package.json](./package.json)中查看


## 支持环境


| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br> iOS Safari | [<img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=356c6916013387449cc5287a6934bec4/d53f8794a4c27d1e11530c8216d5ad6eddc4387a.jpg" alt="Android" width="24px" height="24px" />](https://developer.android.com/)</br> Android 
| --------- | --------- |
| iOS Safari | Android 4.0+ |
