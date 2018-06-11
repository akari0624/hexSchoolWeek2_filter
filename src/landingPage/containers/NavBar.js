import React, {Component} from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'


const OuttestWrapper = Styled.nav`
display:flex;
flex-direction:row;
background-color:#7828B4;
grid-column:1/3;
grid-row:1/2;
`

const LogoWrapper = Styled.div`
width:30%;
padding-top:24px;
padding-bottom:24px;
padding-left:78px;
font-family: Optima-ExtraBlack;
font-size: 36px;
color: #FFFFFF;
`

const SearchBarOutterWrapper = Styled.div`
width:70%;
`

const SearchBarInnerWrapper = Styled.div`
width:70%;
border-bottom:2px solid #FFFFFF;
margin-bottom:24.5px;
`

const SearchInput = Styled.input`
width:100%;
background-color:#7828B4;
opacity:0;
`



class NavBar extends Component {
    constructor(props) {
        super(props)
    }

  render() {

    return(
      <OuttestWrapper>
        <LogoWrapper />
        <SearchBarOutterWrapper>
          <SearchBarInnerWrapper>
            <SearchInput placeHolder="Explore your own activities" />  
          </SearchBarInnerWrapper>
        </SearchBarOutterWrapper>
  
      </OuttestWrapper>
    )
  }
}

NavBar.propTypes = {}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)