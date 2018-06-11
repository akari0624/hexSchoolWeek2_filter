import React,{Component} from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import LocationDropdownSelector from '../components/LocationDropdownSelector'


const FilterableSearchAreaWrapper = Styled.section`
grid-column:1/2;
grid-row:2/3;
border:1px solid black;
`


class FilterableSearchArea extends Component{
constructor(props){
super(props)
}
render(){
  return(
    <FilterableSearchAreaWrapper>  
      <LocationDropdownSelector />
    </FilterableSearchAreaWrapper>  
  )
}
    }


FilterableSearchArea.propTypes = {


  }


function mapStateToProps(state){
    return {}
}




function mapDispatchToProps(dispatch){
return bindActionCreators({
},
dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(FilterableSearchArea)