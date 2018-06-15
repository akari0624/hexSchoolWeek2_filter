import { combineReducers } from 'redux'
import locationData from './LocationDataReducer'
import appConditionNow from './APPLevelStateReducer'
import currPageInfo from './CurrPageReducer'
import searchTerm from './SearchTermReducer'
import afterConditionDataCount from './DataCountAfterConditionsFiltedReducer'
import checkedArea from './AreaCBReducer'

const rootReducer = combineReducers({

  locationData,
  appConditionNow,
  currPageInfo,
  searchTerm,
  afterConditionDataCount,
  checkedArea,
})


export default rootReducer