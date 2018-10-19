import {combineReducers} from 'redux-immutable'
import headerReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'
import boilReducer from '../pages/boil/store/reducer'

const reducer= combineReducers({
    header:headerReducer,
    home:homeReducer,
    boil:boilReducer
})

export default reducer