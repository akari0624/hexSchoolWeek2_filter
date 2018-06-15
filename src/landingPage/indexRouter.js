import React, {Component} from 'react'
import NavBar from './containers/NavBar'
import Styled from 'styled-components'
import FilterableSearchArea from './containers/FilterAbleSearchArea'
import ShowLocationsArea from './containers/ShowLocationsArea'
import PaginationArea from './containers/PaginationArea'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import AnimatedLocationDetailCard from './components/AnimatedLocationDetailCard'
import {bindActionCreators} from '../../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import {fetch_LocationsData} from './actions'

const IndexLandingpageWrapper = Styled.main `
display:grid;
width:100vw;
height:100vh;
grid-template-columns:30% 70%;
grid-template-rows:92px calc(100vh - 92px - 5%) 5% 0px;

@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  
grid-template-rows:124px calc(100vh - 124px - 45px - 60%) 60% 45px;
}
`

class IndexRouter extends Component {

  render() {

    return (
      <IndexLandingpageWrapper>
        <NavBar/>
        <FilterableSearchArea/>
        <ShowLocationsArea>
          {(data, isOpen, toggle) => (<AnimatedLocationDetailCard data={data} isOpen={isOpen} close={toggle}/>)}
        </ShowLocationsArea>
        <PaginationArea/>
      </IndexLandingpageWrapper>

    )
  }


  // componentDidMount(){
  //   this.props.fetch_LocationsData()
  // }

}

function mapStateToProps(state) {

  return {isInLoading: state.appConditionNow.isInLoading}

}

function mapDisaptchToProps(dispatch) {

  return bindActionCreators({

    fetch_LocationsData

  }, dispatch)
}

IndexRouter.propTypes = {

  isInLoading: PropTypes.bool,
  fetch_LocationsData: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDisaptchToProps)(IndexRouter)