import React, {Component} from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import AreaSpinnerHOC from '../../applevelthing/components/hoc/AreaLoadingSpinner'
import LocationCard from '../components/LocationCard'
import LocationDetailCard from '../components/LocationDetailCard'
import  AnimatedLocationDetailCard from '../components/AnimatedLocationDetailCard'

const Wrapper = Styled.section`
  grid-column:2/3;
  grid-row:2/3;
  overflow-y:auto;
  border:1px solid red;
  background-color: #F2F2F2;


@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  grid-column:1/3;
  grid-row:3/4;
}
`


const getSpecifiedIdData = (id, dataArr) => {

  const arr = dataArr.filter(d => d.Id === id)

  if(arr.length > 0 ){
    return arr[0]
  }

  return arr[0]
}



const ShowLocationsArea = props =>  {



  const handleOnItemClick  = (id) => {
     
      
    const clickedLocationData = getSpecifiedIdData(id, props.locationData.records)
    props.setClickedData(clickedLocationData)

  }

  const renderLocationCards = (dataArr) => (

    dataArr.map(d => <LocationCard data={d} key={d.Id} onItemClick={handleOnItemClick} />)
  )

     
  console.log('locaionArea', props.locationData)


  return (
    <Wrapper> 
      {renderLocationCards(props.locationData.records)}
    </Wrapper>
  )

}



ShowLocationsArea.propTypes = {
  renderOneDetailLocationId:PropTypes.string,
  locationData:PropTypes.object.isRequired,
}




export default AreaSpinnerHOC(ShowLocationsArea)