import React, {Component} from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import AreaSpinnerHOC from '../../applevelthing/components/hoc/AreaLoadingSpinner'
import ProcessLocationDataHOC from '../../applevelthing/components/hoc/ProcessLocationDataHOC'
import LocationCard from '../components/LocationCard'

const Wrapper = Styled.section`
  grid-column:2/3;
  grid-row:2/3;
  overflow-y:auto;
  background-color: #F2F2F2;


@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  grid-column:1/3;
  grid-row:2/4;
}
`


const getSpecifiedIdData = (id, dataArr) => {

  const arr = dataArr.filter(d => d.Id === id)

  if(arr.length > 0 ){
    return arr[0]
  }

  return arr[0]
}


class ShowLocationsArea extends Component{

   state = {
     clickedItemId:'',
     isOpen:false,
   }

   handleOnItemClick  = (clickedItemId) => {
     
      
     this.setState(
       {clickedItemId,
         isOpen:true,
       })
    

   }

 

   renderLocationCards = (dataArr,  currPage, rowPerpage, itemClickCB) => {

     return dataArr.map(d => <LocationCard data={d} key={d.Id} onItemClick={ itemClickCB } />)
   }

    handleClose = () => {
      this.setState({
        isOpen:false,
      })
    }   

    render(){

      const { currPage,rowPerpage  } = this.props.currPageInfo
      const { locationData:locationInfos } = this.props
      const { clickedItemId, isOpen } = this.state
      return (
        <Wrapper> 
          {this.props.children(getSpecifiedIdData(clickedItemId, locationInfos),isOpen ,this.handleClose)}
          {this.renderLocationCards(locationInfos, currPage, rowPerpage, this.handleOnItemClick)}
        </Wrapper>
      )
    }
}



ShowLocationsArea.propTypes = {
  locationData:PropTypes.array.isRequired,
  currPageInfo:PropTypes.object.isRequired,
  children:PropTypes.func.isRequired,
}




export default AreaSpinnerHOC( ProcessLocationDataHOC(ShowLocationsArea))