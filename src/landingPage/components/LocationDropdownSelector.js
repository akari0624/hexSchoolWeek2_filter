import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'



const Wrapper = Styled.div`
padding:24px 40px 24px 40px;
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