import { CHANGE_SEARCH_TERM } from '../landingPage/action-types'



export default (state = '', action) => {

  switch(action.type){
  case CHANGE_SEARCH_TERM:

    return  action.payload

  default:

    return state


  }



}