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

@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  flex-direction:column
}
`

const LogoWrapper = Styled.div`
width:30%;
padding-top:24px;
padding-bottom:24px;
padding-left:6.5%;
font-family: Optima-ExtraBlack;
font-size: 36px;
color: #FFFFFF;
border:1px solid green;

@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  width:100%;
  padding:5px auto;
}

`

const SearchBarOutterWrapper = Styled.div`
width:calc(70% - 50px);
padding-left:50px;
@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  width:100%;
  padding-left:0px;
}

`

const SearchBarInnerWrapper = Styled.div`
width:70%;
border-bottom:2px solid #FFFFFF;
margin-bottom:24.5px;

@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  padding:5px auto;
  margin-bottom:0px;
}
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
        <LogoWrapper>HaveFun</LogoWrapper>
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