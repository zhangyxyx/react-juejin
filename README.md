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
### 相关链接
 * https://www.cnblogs.com/GainLoss/p/7743128.html
 * https://www.cnblogs.com/GainLoss/p/7753154.html
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
### react理解
#### 一、虚拟DOM:
1.介绍：
> 虚拟DOM也是js代码，用js代码来表示真实的DON结构；
类似：
    ```<div title="name"><p title="123">123</p></div>```
    ###### 装换为：
    ```{
        tag:'div',
        attrs:{
            title:'name'
        },
        children:[
            {
                tag:'p',
                attrs:{title:'123'},
                children:[123]
            }
        ]
    }```
这样用js代码表示真实的DOM树，当每次有需要更新的时候，我们先将当前的DOM改成虚拟的DON树，然后新旧DOM树进行对比，判断是否需要更新;代码直接操作js比操作DOM性能会好很多；
2.diff算法
平时的树比较时间复杂度是O(N^3),利用了diff算法之后，就可以实现O(N)的时间复杂度
> 利用diff算法实现对比虚拟DON树：
- 如果根节点不同，那么子节点就不需要比较了，直接新的虚拟DOM树
- 如果根节点相同，那么比较子节点
    1.子节点只是在最后增加一个，那么直接添加就可以了
    2.子节点的位置不定的话，那么我们需要根据每个节点的key值来进行判断对应的key值是否是一样的

