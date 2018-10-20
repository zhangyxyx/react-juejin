import React, { Component } from 'react';

import Header from './common/header/header.js'
import Home from './pages/home/home.js'//主页
import Detail from './pages/detail/detail.js'//详情
import Boil from './pages/boil/boil.js'//沸点
import Booklet from './pages/booklet/booklet.js'//小册


import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/juejin/home' exact component={Home}></Route>
              <Route path='/juejin/home/:id' exact component={Home}></Route>
              <Route path='/juejin/boil' exact component={Boil}></Route>
              <Route path='/juejin/booklet' exact component={Booklet}></Route>
              <Route path="/juejin/detail/:id" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;