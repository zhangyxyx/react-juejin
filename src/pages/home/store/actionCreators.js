import * as constants from './constants'

export const showtopiclist=(data)=>({
    type:constants.SHOW_TOPIC_LIST,
    data:[
        {id:'1',val:'简书电影',pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'2',val:'故事',pic:'//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'3',val:'读书',pic:'//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'4',val:'手绘',pic:'//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'5',val:'旅行●在路上',pic:'//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'6',val:'@IT●互联网',pic:'//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'7',val:'摄影',pic:'//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
    ]
})
export const showlist=(data)=>({
    type:constants.SHOW_LIST,
    data:[
        {id:'1',title:'干货：搭建自己的Git服务器',con:'前言：Git是一款非常好用的版本管理器，对于开源项目，我们可以托管到GitHub，但是闭源项目GitHub的收费非常昂贵。实验室有一部分工作是需',user:'OneXzgj',common:20,like:10,pic:'//upload-images.jianshu.io/upload_images/10612886-244d0f50b69c2185.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'},
        {id:'2',title:'李开复告诉你：算法的力量',con:'算法是计算机科学领域最重要的基石之一，但却受到了国内一些程序员的冷落。许多同学看到一些公司在招聘时要求的编程语言五花八门就产生了一种误解，认为学...',user:'OneXzgj',common:20,like:10,pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'3',title:'外包程序员被当猴耍，1000做个百度，明天要上线！',con:'拿最低的工资，干最苦的活，这就是外包程序员的日常。外包程序员，是指帮其他公司做开发的一群人，他们总要面对一些“外行”人的指挥，看着天马行空的需求...',user:'OneXzgj',common:20,like:10,pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'4',title:'30个极大提高开发效率的Visual Studio Code插件',con:'译者按： 看完这篇文章，我打算从 Sublime Text 转到 Visual Studio Code 了！ 原文: Immensely upg...',user:'OneXzgj',common:20,like:10,pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'5',title:'Spring Boot（5）一个极简且完整的后台框架',con:'一个完整的极简后台框架，方便做小项目的时候可以快速开发。 这里面多贴图片和代码，做个参考吧，代码可以下载下来自己看看，里面这套后台模板不错，喜欢...',user:'OneXzgj',common:20,like:10,pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'6',title:'如果这样来理解HTTPS，一篇就够了！',con:'1、前言 可能有初学者会问，即时通讯应用的通信安全，不就是对Socket长连接进行SSL/TLS加密这些知识吗，干吗要理解HTTPS协议呢。 这...',user:'OneXzgj',common:20,like:10,pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'7',title:'学会了Python出门不担心没有WiFi了Python几行代码就可以做到！进来就学会',con:'是不是还在为WiFi密码发愁，甚至有时候还忘掉自己家的WiFi密码，没关系，今天我给大家带来几个破解WiFi密码的案例！我先说明下这个东西一点都...',user:'OneXzgj',common:20,like:10,pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'8',title:'自控力差？！推荐这款神器保证你安心工作学习',con:'酷友们，大家好。 每天工作或学习，忙忙碌碌的一天，却又感觉什么事都没有做，工作学习都没有完成。那是什么原因造成的呢？很大一部分是浏览一些娱乐等与...',user:'OneXzgj',common:20,like:10,pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'9',title:'TODO 最适合练习主流框架的应用',con:'1、应用介绍: 使用MVP+Dagger2+Retrofit+Rxjava2+RxLifecycle+ARouter框架构建一般使用该框架的应用',user:'OneXzgj',common:20,like:10,pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
    ]
})
