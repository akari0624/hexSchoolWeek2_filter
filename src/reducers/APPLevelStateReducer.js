import {TOGGLE_LOADING} from '../applevelthing/action_type'
import { TOGGLE_LEFT_SIDE_FILTERABLE_AREA_ISOPEN } from '../landingPage/action-types'

const DefaultAppLevelState = {isInLoading:false, isLeftSideOpen:false,}


const reverseIsLoading = (state) => {

  const newState = {...state}

  newState.isInLoading = !state.isInLoading

  return newState

}

const reverseIsLeftSideOpen  = (state) => {

  const newState = {...state}

  newState.isLeftSideOpen = !state.isLeftSideOpen

  return newState

}

export default (state =DefaultAppLevelState, action) => {

  switch(action.type){
  case TOGGLE_LOADING:

    return  reverseIsLoading(state)

  case TOGGLE_LEFT_SIDE_FILTERABLE_AREA_ISOPEN:
    
    return reverseIsLeftSideOpen(state) 
    
  default:

    return state


  }



}