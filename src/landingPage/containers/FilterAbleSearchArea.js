import React,{Component} from 'react'
import Styled from 'styled-components'
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


  @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    grid-column:1/3;
    grid-row:2/3;
}
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
    return(
      <FilterableSearchAreaWrapper>  
        <KCGAreaCheckboxGroup  onCBChange={this.onCBChange}/>
      </FilterableSearchAreaWrapper>  
    )
  }
}


FilterableSearchArea.propTypes = {

  doAreaCheckboxFilterSearch:PropTypes.func.isRequired,
  }


function mapStateToProps(state){
    return {}
}




function mapDispatchToProps(dispatch){
  return bindActionCreators({

    doAreaCheckboxFilterSearch,
  },
  dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(FilterableSearchArea)