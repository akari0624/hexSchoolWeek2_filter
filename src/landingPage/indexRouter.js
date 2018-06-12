import React from 'react'
import NavBar from './containers/NavBar'
import Styled from 'styled-components'
import FilterableSearchArea from './containers/FilterAbleSearchArea'
import ShowLocationsArea from './containers/ShowLocationsArea'
import PaginationArea from './containers/PaginationArea'



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

export default(props) => {

  return (
    <IndexLandingpageWrapper>
      <NavBar />
      <FilterableSearchArea />
      <ShowLocationsArea />
      <PaginationArea />
    </IndexLandingpageWrapper>
  )

}
