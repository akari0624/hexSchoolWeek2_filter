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

const RoundBallButton = Styled.div `

    display:none;

   @media (max-width:${props => props.theme.mobileOneColumnWidth}){
     display:block;
     height:40px;
     width:40px;
     background-color:#7828B4;
     border-radius:50%;
     position:fixed;
     cursor:pointer;
     animation:${flotingUp} 1s forwards;
    }

`

const ToggleLeftSideSearchFilterAreaFloatingButton = props => {

  const handleFloatingButtonClick = () => {

    props.toggleLeftSideFilterableAreaIsOpen()
  }

  return (<RoundBallButton onClick={handleFloatingButtonClick}/>)

}

ToggleLeftSideSearchFilterAreaFloatingButton.propTypes = {

  toggleLeftSideFilterableAreaIsOpen:PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { appConditionNow } = state
  return {
    appConditionNow
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleLeftSideFilterableAreaIsOpen
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ToggleLeftSideSearchFilterAreaFloatingButton)