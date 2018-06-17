import {FETCH_LOCATION_DATA, CHANGE_SEARCH_TERM, LOCATIONS_DATA_COUNT, TOGGLE_LEFT_SIDE_FILTERABLE_AREA_ISOPEN} from '../action-types'
import axios from 'axios'
import {LocationAPI_baseUrl} from '../../api_url'
import { wrapToAction } from '../../utils'
import { RECEIVE_PAGE_CHANGE } from '../../applevelthing/action_type' 
import { toggleLoadingState } from '../../applevelthing/actions'
import { AREA_CHECK_BOX_CHANGE } from '../action-types'



const onSuccessProcessLocationData = ({result}) => {

  const {q, records} = result
    
  return {
    q,
    records,
    total:records.length,
    errorMsg:''
  }
}

const onErrorProcessLocationData = (searchText,e) => {

  return {
    q:searchText,
    records:[],
    total:0,
    errorMsg:`發生網路連線錯誤:${e}`
  }
}


export const fetch_LocationsData = (searchText) => {

  return dispatch => {
    const url = `${LocationAPI_baseUrl}`   

    dispatch(toggleLoadingState())

    axios.get(url)
      .then(
        response => { 
          dispatch(toggleLoadingState())
          dispatch(wrapToAction(FETCH_LOCATION_DATA, onSuccessProcessLocationData(response.data)))
          dispatch(wrapToAction(LOCATIONS_DATA_COUNT, response.data.result.records.length))
        }
      
      )
      .catch(
        e => {dispatch(
          wrapToAction(FETCH_LOCATION_DATA, onErrorProcessLocationData(searchText, e))
        )
        dispatch(toggleLoadingState())
        }
      )
    
  }
    
}


export const changePage = (nextPageNum) => {


  return {
    type:RECEIVE_PAGE_CHANGE,
    payload:{nextPage:nextPageNum}
  }

}

export const doTextSearch = (text) => {

  return (dispatch) => {
    dispatch(wrapToAction(CHANGE_SEARCH_TERM, text))
    dispatch(wrapToAction(RECEIVE_PAGE_CHANGE, {nextPage:1}))
  }
}

export const doAreaCheckboxFilterSearch = (cBoxArr) => {

  return (dispatch) => {
    dispatch(wrapToAction(AREA_CHECK_BOX_CHANGE, cBoxArr))
    dispatch(wrapToAction(RECEIVE_PAGE_CHANGE, {nextPage:1}))
  }
}

export const updateDataCountAfterDataFiltered = (count) => {


  return wrapToAction(LOCATIONS_DATA_COUNT, count)

}

export const toggleLeftSideFilterableAreaIsOpen = () => {

  return{
    type:TOGGLE_LEFT_SIDE_FILTERABLE_AREA_ISOPEN,
    payload:null,
  }

}