import { combineReducers } from 'redux'
import locationData from './LocationDataReducer'
import appConditionNow from './APPLevelStateReducer'

const rootReducer = combineReducers({

  locationData,
  appConditionNow
})


export default rootReducer