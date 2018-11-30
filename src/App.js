import React, { Component } from 'react';

import Header from './common/header/header.js'
import Home from './pages/home/home.js'//主页
import Boil from './pages/boil/boil.js'//沸点
import Booklet from './pages/booklet/booklet.js'//小册
import Opensource from './pages/opensource/opensource.js'//开源库
import Activity from './pages/activity/activity.js'//活动
import Detail from './pages/detail/detail.js'//详情
import User from './pages/user/user.js'//主页

import {Provider} from 'react-redux'
import {BrowserRouter,Route,Switch,HashRouter} from 'react-router-dom'
import store from './store'

let routes=[
  {path:'/',component:Home},
  {path:'/juejin/home',component:Home},
  {path:'/jujin/home/:id',component:Home},
  {path:'/juejin/boil',component:Boil},

  {path:'/juejin/booklet',component:Booklet},
  {path:'/juejin/booklet/:id',component:Booklet},
  {path:'/juejin/Opensource',component:Opensource},
  {path:'/juejin/activity',component:Activity},
  {path:'/juejin/activity/:id',component:Activity},
  {path:'/juejin/Detail',component:Detail},
  {path:'/juejin/user',component:User},
]

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    

    return (
      <Provider store={store}>
        <div>

          <HashRouter>
            <div>
              {
                routes.map((route,key)=>{
                  return <Route key={key} path={route.path} exact component={route.component}></Route> 
                })
              }
              {/* <Route path="/" exact component={Home}/>
              
              <Route path='/juejin/home' exact component={Home}></Route> 
              <Route path='/juejin/home/:id' exact component={Home}></Route>

              <Route path='/juejin/boil' exact component={Boil}></Route>

              <Route path='/juejin/booklet' exact component={Booklet}></Route>
              <Route path='/juejin/booklet/:id' exact component={Booklet}></Route>

              <Route path="/juejin/detail/:id" exact component={Detail}></Route>
              
              <Route path="/juejin/Opensource" exact component={Opensource}></Route>

              <Route path="/juejin/activity" exact component={Activity}></Route>
              <Route path="/juejin/activity/:id" exact component={Activity}></Route>

              <Route path="/juejin/Detail" exact component={Detail}></Route>

              <Route path="/juejin/user" exact component={User}></Route>
               */}
            </div>
          </HashRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
