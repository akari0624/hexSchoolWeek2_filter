import { AREA_CHECK_BOX_CHANGE } from '../landingPage/action-types'

const defaultAreaCBValue = []




export default (state = defaultAreaCBValue, action) => {

  switch(action.type){

  case AREA_CHECK_BOX_CHANGE:
     
   
    return action.payload

  default:

    return state
  }



}