import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const Wrapper = Styled.section`
grid-column:2/3;
grid-row:2/3;
border:1px solid red;

@media (max-width:${props => props.theme.mobileOneColumnWidth}){
grid-column:1/3;
grid-row:3/4;
}
`



const ShowLocationsArea = props => {

  console.log('locaionArea', props.locationData)
  return (
    <Wrapper> 右半景點區 </Wrapper>
  )
}

ShowLocationsArea.propTypes = {

  locationData:PropTypes.object.isRequired,
}


  function mapStateToProps(state) {
    
    const { locationData } = state
    return {
      locationData
    }
  }

export default connect(mapStateToProps, null)(ShowLocationsArea)