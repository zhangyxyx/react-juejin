
import {createStore} from 'redux'
import thunk from 'redux-thunk'
import {compose} from 'redux'
import reducer from './reducer'
import {applyMiddleware} from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
))

export default store



