import React,{Component} from 'react'
import Styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import LocationDropdownSelector from '../components/LocationDropdownSelector'
import KCGAreaCheckboxGroup from '../components/KCGAreaCheckboxGroup'
import { doAreaCheckboxFilterSearch } from '../actions'



const FilterableSearchAreaWrapper = Styled.section`
  grid-column:1/2;
  grid-row:2/3;
  border:1px solid black;


  /* @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    grid-column:1/3;
    grid-row:2/3;
} */

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
  background-color:black;
  opacity:.4;
  border:1px solid black;
  `


const AnimatedFilterableSearchArea = Styled.div`
width:50%;
height:100vh;
opacity:1.0;
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
          <KCGAreaCheckboxGroup  onCBChange={this.onCBChange}/>
        </FilterableSearchAreaWrapper>  
      )
    }
  
    return(
      <AnimatedFilterableWholeScreenWrapper>  
        <AnimatedFilterableSearchArea>  
          <KCGAreaCheckboxGroup  onCBChange={this.onCBChange}/>
        </AnimatedFilterableSearchArea>  
      </AnimatedFilterableWholeScreenWrapper>  
    )

  }
}


FilterableSearchArea.propTypes = {

  doAreaCheckboxFilterSearch:PropTypes.func.isRequired,
  appConditionNow:PropTypes.object,
  }


function mapStateToProps(state){
  const { appConditionNow } = state
  return {
    appConditionNow
  }
}




function mapDispatchToProps(dispatch){
  return bindActionCreators({

    doAreaCheckboxFilterSearch,
  },
  dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(FilterableSearchArea)