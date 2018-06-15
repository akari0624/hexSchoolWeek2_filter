import { LOCATIONS_DATA_COUNT } from '../landingPage/action-types'






export default (afterConditionDataCount = 0, action) => {

  switch(action.type){

  case LOCATIONS_DATA_COUNT:
     
   
    return action.payload

  default:

    return afterConditionDataCount
  }



}