import React, { Component } from 'react';

import Header from './common/header/header.js'
import Home from './pages/home/home.js'
import Detail from './pages/detail/detail.js'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        
        <div>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
