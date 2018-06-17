import React,{Component} from 'react'
import Styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import KCGAreaCheckboxGroup from '../components/KCGAreaCheckboxGroup'
import { doAreaCheckboxFilterSearch, toggleLeftSideFilterableAreaIsOpen } from '../actions'



const FilterableSearchAreaWrapper = Styled.section`
  grid-column:1/2;
  grid-row:2/3;


@media (max-width:${props => props.theme.mobileOneColumnWidth}){
    display:none;
    }
`

const AnimatedFilterableAreaFromLeftToRight = keyframes`
  from {
    transform:translateX(-100vw);
  }

  to {
    transform:translateX(0px);
  }
`

const AnimatedFilterableWholeScreenWrapper = Styled.section`
  position:absolute;
  width:100vw;  
  height:100vh;
  background-color:rgba(0,0,0,.5);
  `


const AnimatedFilterableSearchArea = Styled.div`
width:50%;
height:100vh;
background-color:#FFFFFF;
transform:translateZ(10);
animation:${AnimatedFilterableAreaFromLeftToRight} 1s forwards;
`

class FilterableSearchArea extends Component{
  constructor(props){
    super(props)
  }

  onCBChange = (values) => {

    console.log(values)
    this.props.doAreaCheckboxFilterSearch(values)
  }

  render(){
    if(!this.props.appConditionNow.isLeftSideOpen){
      return(
        <FilterableSearchAreaWrapper>  
          <KCGAreaCheckboxGroup  onCBChange={this.onCBChange} nowChecked={this.props.checkedArea}/>
        </FilterableSearchAreaWrapper>  
      )
    }
  
    return(
      <AnimatedFilterableWholeScreenWrapper onClick={this.props.toggleLeftSideFilterableAreaIsOpen}>  
        <AnimatedFilterableSearchArea>  
          <KCGAreaCheckboxGroup  onCBChange={this.onCBChange} nowChecked={this.props.checkedArea}/>
        </AnimatedFilterableSearchArea>  
      </AnimatedFilterableWholeScreenWrapper>  
    )

  }
}


FilterableSearchArea.propTypes = {

  doAreaCheckboxFilterSearch:PropTypes.func.isRequired,
  appConditionNow:PropTypes.object,
  toggleLeftSideFilterableAreaIsOpen:PropTypes.func,
  checkedArea:PropTypes.array,
  }


function mapStateToProps(state){
  const { appConditionNow, checkedArea } = state
  return {
    appConditionNow, checkedArea
  }
}




function mapDispatchToProps(dispatch){
  return bindActionCreators({

    doAreaCheckboxFilterSearch,
    toggleLeftSideFilterableAreaIsOpen,
  },
  dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(FilterableSearchArea)