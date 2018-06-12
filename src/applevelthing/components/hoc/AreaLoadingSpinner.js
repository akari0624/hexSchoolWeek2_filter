import React from 'react'
import Styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const WholeAreaLoadingWrapperShow = Styled.section`
width:100%;
height:100%;
opacity:.5;
background-color:#F2F2F2; 
z-index:9999;
display:block;
`

const loaderKeyFrames = keyframes`
  0% {
  
    transform: rotate(0deg);
  }
  100% {
    
    transform: rotate(360deg);
  }
`

const Loader3 = Styled.div`

margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(120, 40, 180, 0.2);
  border-right: 1.1em solid rgba(120, 40, 180, 0.2);
  border-bottom: 1.1em solid rgba(120, 40, 180, 0.2);
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  animation: ${loaderKeyFrames} 1.1s infinite linear;


@:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

`


// const WholeAreaLoadingWrapperHide = Styled.section`
// width:100%;
// height:100%;
// opacity:.5;
// background-color:#F2F2F2; 
// z-index:9999;
// display:none;
// `


const AreaLoadingSpinnerHOC = ComposedComponent =>  props  => (

  props.isInLoading ?  <WholeAreaLoadingWrapperShow><Loader3 /></WholeAreaLoadingWrapperShow> : <ComposedComponent locationData={props.locationData}/>
   
)





AreaLoadingSpinnerHOC.propTypes = {

  isInLoading:PropTypes.bool,

}



AreaLoadingSpinnerHOC.propTypes = {

  locationData:PropTypes.object.isRequired,
}


function mapStateToProps(state) {
    
  const { locationData } = state
  return {
    isInLoading : state.appConditionNow.isInLoading,
    locationData,
  }
}

export default (composedComponent) => connect(mapStateToProps, null)(AreaLoadingSpinnerHOC(composedComponent))