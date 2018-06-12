import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import AreaSpinnerHOC from '../../applevelthing/components/hoc/AreaLoadingSpinner'
import LocationCard from '../components/LocationCard'


const Wrapper = Styled.section`
grid-column:2/3;
grid-row:2/3;
border:1px solid red;
overflow-y:auto;
background-color: #F2F2F2;


@media (max-width:${props => props.theme.mobileOneColumnWidth}){
grid-column:1/3;
grid-row:3/4;
}
`


const renderLocationCards = (dataArr) => (

  dataArr.map(d => <LocationCard data={d} key={d.Id} />)
)




const ShowLocationsArea = props => {


  console.log('locaionArea', props.locationData)
  return (
    <Wrapper> 
      {renderLocationCards(props.locationData.records)}
    </Wrapper>
  )
}

ShowLocationsArea.propTypes = {

  locationData:PropTypes.object,
}




export default AreaSpinnerHOC(ShowLocationsArea)