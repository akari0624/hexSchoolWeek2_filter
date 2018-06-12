import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'



const WholeScreenLoadingWrapperShow = Styled.section`
width:100vw;
height:100vh;
opacity:.5;
background-color:#F2F2F2; 
z-index:9999;
display:block;
`


const WholeScreenLoadingWrapperHide = Styled.section`
width:100vw;
height:100vh;
opacity:.5;
background-color:#F2F2F2; 
z-index:9999;
display:none;
`


const WholeScreenLoading = props => (


  props.isInLoading ? <WholeScreenLoadingWrapperShow /> : <WholeScreenLoadingWrapperHide />
   


)





WholeScreenLoading.propTypes = {

  isInLoading:PropTypes.bool,

}

export default WholeScreenLoading