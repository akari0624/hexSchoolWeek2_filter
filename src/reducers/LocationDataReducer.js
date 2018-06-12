import { FETCH_LOCATION_DATA } from '../landingPage/action-types'



const _defaultState_LocationsData = {records:[],q:'',total:0,errorMsg:''}

export default  (state = _defaultState_LocationsData, action) => {

  switch(action.type){
  case  FETCH_LOCATION_DATA:
     
    return action.payload

    
  default:
    return state  
  }


}