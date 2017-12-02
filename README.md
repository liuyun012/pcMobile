# pc-mobile

> 基于vue-cli模板的多页面多路由项目，一个PC端，一个移动端，且有各自的单页面路由

## Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目结构

```
|--- project
    |--- build                            // 项目打包编译目录
    |--- config                           // 项目打包配置目录
    |--- dist                             // 项目打包后的输出文件
    |--- src                              // 项目开发的源代码
        |--- api                          // 后端提供的api接口集合和封装
            |--- http.js                  // axios的二次封装
            |--- index.js                 // pc端 提供的api接口集合
            |--- phone.js                 // 移动端 提供的api接口集合
            |--- urlConfig.js             // 后端api接口路径配置
        |--- assets                       // 公众静态资料目录
            |--- css                      // css样式文件(sass语法)
                |--- common               // css重置及公用样式文件
                |--- components           // 多项目公用样式文件
                |--- views                // 页面样式汇总
                |--- index.scss           // pc端 页面样式入口文件
                |--- phone.scss           // h5移动端 页面样式入口文件
            |--- fonts                    // 外引字体和svg
            |--- images                   // 图片资源
                |--- index                // pc端 背景图片资源集合
                |--- phone                // 移动端 背景图片资源集合
        |--- components                   // 公共组件
        |--- modules                      // 多项目入口模块
            |--- index                    // 模块页面部分
                |--- views                // 页面组件部分
                |--- App.vue              // 页面总入口文件部分
                |--- index.html           // html模板文件 -- pc端
                |--- index.js             // 页面总入口
            |--- phone                    // 模块页面部分
        |--- router                       // vue-router 路由配置
            |--- index.js                 // 默认的 路由配置
            |--- phone.js                 // h5移动端的 路由配置
        |--- untils                       // 通用的函数库，工具库
    |--- static                           // 第三方插件目录和静态图片static(没有npm包的第三方插件)
        |--- img                          // 页面静态图片集合
    |--- index.html                       // 入口文件
    |--- .babelrc                         // babel配置
    |--- package.json                     // 包管理信息
    |--- webpack.config.js                // webpack配置文件
    |--- readme.md   
```
