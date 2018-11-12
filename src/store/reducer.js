import {combineReducers} from 'redux-immutable'
import headerReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'
import boilReducer from '../pages/boil/store/reducer'
import opensourceReducer from '../pages/opensource/store/reducer'
import detailRedcuer from '../pages/detail/store/reducer'
import activityRedcuer from '../pages/activity/store/reducer'

const reducer= combineReducers({
    header:headerReducer,
    home:homeReducer,
    boil:boilReducer,
    detail:detailRedcuer,
    opensource:opensourceReducer,
    activity:activityRedcuer
})

export default reducer