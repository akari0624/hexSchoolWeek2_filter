import { combineReducers } from 'redux'
import locationData from './LocationDataReducer'
import appConditionNow from './APPLevelStateReducer'
import currPageInfo from './CurrPageReducer'

const rootReducer = combineReducers({

  locationData,
  appConditionNow,
  currPageInfo,
})


export default rootReducer