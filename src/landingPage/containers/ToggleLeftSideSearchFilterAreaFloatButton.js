import React from 'react'
import Styled, {keyframes} from 'styled-components'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { toggleLeftSideFilterableAreaIsOpen } from '../actions'

const flotingUp = keyframes `

   from{
     transform:translate(25px, 120vh);
   }
  
   to{
    transform:translate(25px, 80vh);
   }

`

const slideDown = keyframes `

   from{
    transform:translate(25px, 80vh);
   }
  
   to{
    transform:translate(25px, 120vh);
   }

`
const buttonWidthAndHeight = '80px'

const RoundBallButtonPopUp = Styled.div `

    display:none;

   @media (max-width:${props => props.theme.mobileOneColumnWidth}){
     display:block;
     height:${buttonWidthAndHeight};
     width:${buttonWidthAndHeight};
     background-color:#7828B4;
     border-radius:50%;
     position:fixed;
     cursor:pointer;
     background-image:url('http://www.line-tatsujin.com/stamp/detail/a05655/031.png');
     background-size:${buttonWidthAndHeight} ${buttonWidthAndHeight};
     animation:${flotingUp} 1s forwards;
    }

`

const RoundBallButtonSlideDown = Styled.div `

    display:none;

   @media (max-width:${props => props.theme.mobileOneColumnWidth}){
     display:block;
     height:${buttonWidthAndHeight};
     width:${buttonWidthAndHeight};
     background-color:#7828B4;
     border-radius:50%;
     position:fixed;
     cursor:pointer;
     background-image:url('http://www.line-tatsujin.com/stamp/detail/a05655/031.png');
     background-size:${buttonWidthAndHeight} ${buttonWidthAndHeight};
     animation:${slideDown} 1s forwards;
    }

`


const ToggleLeftSideSearchFilterAreaFloatingButton = props => {

  const handleFloatingButtonClick = () => {

    props.toggleLeftSideFilterableAreaIsOpen()
  }

  if(!props.isLeftSideOpen){
  return (<RoundBallButtonPopUp onClick={handleFloatingButtonClick}/>)
  }
  
  return (<RoundBallButtonSlideDown />)

}

ToggleLeftSideSearchFilterAreaFloatingButton.propTypes = {

  toggleLeftSideFilterableAreaIsOpen:PropTypes.func.isRequired,
  isLeftSideOpen:PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  const { appConditionNow } = state
  return {
    isLeftSideOpen : appConditionNow.isLeftSideOpen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleLeftSideFilterableAreaIsOpen
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLeftSideSearchFilterAreaFloatingButton)