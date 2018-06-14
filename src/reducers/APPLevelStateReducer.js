import {TOGGLE_LOADING} from '../applevelthing/action_type'


const DefaultAppLevelState = {isInLoading:false}


const reverseIsLoading = (state) => {

  const newState = {...state}

  newState.isInLoading = !state.isInLoading

  return newState

}

export default (state =DefaultAppLevelState, action) => {

  switch(action.type){
  case TOGGLE_LOADING:

    return  reverseIsLoading(state)

  default:

    return state


  }



}