import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const Wrapper = Styled.section`
grid-column:2/3;
grid-row:2/3;
border:1px solid red;

@media (max-width:${props => props.theme.mobileOneColumnWidth}){
grid-column:1/3;
grid-row:3/4;
}
`



const ShowLocationsArea = props => (

  <Wrapper> 右半景點區 </Wrapper>

)
ShowLocationsArea.propTypes = {


  }
export default ShowLocationsArea