# react-juejin

### 采用React实现掘金网站的前端页面展示
### 项目整体说明
 * 前台界面采用的react16 react-router4 redux5,交互采用的是axios 
### 安装和运行
 * 安装:
    * 安装node: npm 
    * 下载react：npm install -g react 
    * 安装包：看package.json 
 * 运行:npm start
 * 构建:npm run build
### 技术栈
 * react16.0 redux5.0 react-router4.3
 * 项目结构：
  * ![Image text](https://github.com/GainLoss/react-juejin/blob/master/src/static/read/2.png)
### 目标功能
 * 打开主页面之后正常走一个流程，进入到主页面，可以点击选择跳转到其他页面，在其他页面中也可以进入到详情页面
 * 项目架构直接是create-react-app构建的，路由是react-router4创建，数据是react-redux进行交换的。
### 总结
 * 直接使用create-react-app创建项目，对于自身来说是很方便的，路由react-router4和之前的版本有些变化，但是变化不是很大，看一下文档就可以了，组件之间数据用react-redux交互真的很方便。
 * create-react-app也进行了一些变化，项目的配置文件是放在node_modules中的react-script文件夹中
### 链接
 * https://www.cnblogs.com/GainLoss/p/7743128.html
### 打包上线
 * 执行：
      * npm run build //执行这个命令就可以了，然后将项目中的build文件夹全部复制到服务器上面去
      * 我直接用的是找了一台公司的测试环境试的demo,用winscp直接将代码拖到环境中的
      ![Image text](https://github.com/GainLoss/react-juejin/blob/master/src/static/read/1.png)
      
 * 注意：
     * 打开网址的时候以index.html格式打开，显示空白页面：
         * 如果你希望以.../index.htm这种方式访问应用，那么你可以在package.json文件中增加一个homepage字段，如下："homepage": ".",
         * 如果你是BrowserRouter设置路由的话，改成HashRouter这样页面页面才会出来
    * 引入组件的时候用了一个@替代路径：
         * 方法是：在node_modules中react-scripts->config->webpack.config.dev.js(生产环境文件和开发环境文件一样要改)中的resolve中修改
            alias: {
               '@': paths.appSrc,//paths是引入的一个js文件 同级的
             },
----

