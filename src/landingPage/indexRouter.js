import React from 'react'
import NavBar from './containers/NavBar'
import Styled from 'styled-components'
import FilterableSearchArea from './containers/FilterAbleSearchArea'
import ShowLocationsArea from './containers/ShowLocationsArea'
import PaginationArea from './containers/PaginationArea'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const IndexLandingpageWrapper = Styled.main`
display:grid;
width:100vw;
height:100vh;
grid-template-columns:30% 70%;
grid-template-rows:92px calc(100vh - 92px - 5%) 5% 0px;

@media (max-width:${ props => props.theme.mobileOneColumnWidth}){
  
grid-template-rows:124px calc(100vh - 124px - 45px - 60%) 60% 45px;
}
`

const IndexRouter = (props) => {

  // return (
  //   <WholeScreenLoading isInLoading={props.isInLoading}>
  //     <IndexLandingpageWrapper>
  //       <NavBar />
  //       <FilterableSearchArea />
  //       <ShowLocationsArea />
  //       <PaginationArea />
  //     </IndexLandingpageWrapper>
  //   </WholeScreenLoading> 
  // )

  return (
    
      <IndexLandingpageWrapper>
        <NavBar />
        <FilterableSearchArea />
        <ShowLocationsArea />
        <PaginationArea />
      </IndexLandingpageWrapper>
    
  )

}



function mapStateToProps(state){

  return {isInLoading : state.appConditionNow.isInLoading}

}


IndexRouter.propTypes = {

  isInLoading:PropTypes.bool,
}


export default connect(mapStateToProps, null)(IndexRouter)