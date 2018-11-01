import React, { Component } from 'react';

import Header from './common/header/header.js'
import Home from './pages/home/home.js'//主页
import Boil from './pages/boil/boil.js'//沸点
import Booklet from './pages/booklet/booklet.js'//小册
import Opensource from './pages/opensource/opensource.js'//开源库
import Activity from './pages/activity/activity.js'//活动
import Detail from './pages/detail/detail.js'//详情


import {Provider} from 'react-redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>

          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home}/>

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
              
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
