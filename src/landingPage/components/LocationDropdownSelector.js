import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'



const Wrapper = Styled.div`
padding:24px 40px 24px 40px;
background-color: #EBEBEB;
border-bottom:1px solid #D7D7D7;


@media (max-width:${props => props.theme.mobileOneColumnWidth}){
grid-column:1/3;
grid-row:3/4;
padding:8px 40px 8px 40px;
background-color:#D7D7D7;
border-bottom:1px solid #EBEBEB;
}
`

const DescText = Styled.div`

`

const LocationSelector = Styled.div`
`


const LocationDropdownSelector = props => (

  <Wrapper>
    <DescText>Location</DescText>
    <LocationSelector>下拉選單</LocationSelector>
  </Wrapper>

)
LocationDropdownSelector.propTypes = {


  }
export default LocationDropdownSelector