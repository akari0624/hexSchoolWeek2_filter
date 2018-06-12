import {FETCH_LOCATION_DATA} from '../action-types'
import axios from 'axios'
import {LocationAPI_baseUrl} from '../../api_url'
import { wrapToAction } from '../../utils'



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
    const url = `${LocationAPI_baseUrl}&q=${searchText}`   

    axios.get(url)
      .then(
        response => dispatch(
          wrapToAction(FETCH_LOCATION_DATA, onSuccessProcessLocationData(response.data))
        ))
      .catch(
        e => dispatch(
          wrapToAction(FETCH_LOCATION_DATA, onErrorProcessLocationData(searchText, e))
        ))
    
  }
    
}