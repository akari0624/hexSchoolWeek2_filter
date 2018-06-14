import { RECEIVE_PAGE_CHANGE } from '../applevelthing/action_type'

const defaultState = {
  currPage:1,
  rowPerpage:5,
}


const handlePageChange = (state, action) => {

  const newState = {...state}
  newState.currPage = action.payload.nextPage  
  return newState 
}


export default (state = defaultState, action) => {

  switch(action.type){

  case RECEIVE_PAGE_CHANGE:
     
   
    return handlePageChange(state, action)

  default:

    return state
  }



}