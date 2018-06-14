import React, {Component} from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import { fetch_LocationsData } from '../actions'



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
align-self:flex-end
margin-bottom:5px;
`

const SearchBarInnerWrapperForm = Styled.form`
  width:70%;
  border-bottom:2px solid #FFFFFF;
  margin-bottom:24.5px;

  @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    padding:5px auto;
    margin-bottom:0px;
}
`

const InvalidSearchBarInnerWrapperForm = Styled.form`
  width:70%;
  border-bottom:2px solid red;
  margin-bottom:24.5px;

  @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    padding:5px auto;
    margin-bottom:0px;
  }  
`

const SearchInput = Styled.input`
  width:100%;
  background-color:#7828B4;
  border:unset;
  padding-left:20px;
  font-family: Roboto-Italic;
  font-size: 20px;
  color: rgba(255,255,255,0.50);

  &:focus{
    outline:none;
  }



  @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    font-family: Roboto-Italic;
      font-size: 20px;
      color: #9B9B9B;
  }
`





class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText:'鹽埕區',
      isSearchTextInvalid:false,
    }
  }

    handleSearchTextChange = e => {
      const searchText = e.target.value
      const { isSearchTextInvalid } = this.state
      if(isSearchTextInvalid && searchText !== ''){
        const newIsSearchTextInvalid = false;
        this.setState({
          searchText,
          isSearchTextInvalid:newIsSearchTextInvalid,
        })
      }
      else{ 
        this.setState({
          searchText
        })
      }
    }

    handleSearchTextSubmit = e => {
      e.preventDefault()
      if(this.state.searchText === ''){
        this.setState({
          isSearchTextInvalid:true,
        })
        return
      }

      this.props.fetch_LocationsData(this.state.searchText)



    }

    renderSearchInputWrapperFormByCondition = ({isSearchTextInvalid, searchText}) => {

      if(!isSearchTextInvalid){
        return (
          <SearchBarInnerWrapperForm onSubmit={this.handleSearchTextSubmit}>  
            <SearchInput placeHolder="Explore your own activities" value={searchText} onChange={this.handleSearchTextChange}/>  
          </SearchBarInnerWrapperForm>
        )
      }
      return(
        <InvalidSearchBarInnerWrapperForm onSubmit={this.handleSearchTextSubmit}>  
          <SearchInput placeHolder="Explore your own activities" value={searchText} onChange={this.handleSearchTextChange}/>  
        </InvalidSearchBarInnerWrapperForm>
      )
    }

    render() {
      return(
        <OuttestWrapper>
          <LogoWrapper>HaveFun</LogoWrapper>
          <SearchBarOutterWrapper>
            {this.renderSearchInputWrapperFormByCondition(this.state)}
          </SearchBarOutterWrapper>
  
        </OuttestWrapper>
      )
    }
}

NavBar.propTypes = {
  fetch_LocationsData:PropTypes.func.isRequired,
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetch_LocationsData}, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar)