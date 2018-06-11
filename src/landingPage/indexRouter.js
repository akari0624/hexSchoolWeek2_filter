import React from 'react'
import NavBar from './containers/NavBar'
import Styled from 'styled-components'
import FilterableSearchArea from './containers/FilterAbleSearchArea'
import ShowLocationsArea from './components/ShowLocationsArea'
import PaginationArea from './containers/PaginationArea'

const IndexLandingpageWrapper = Styled.main`
display:grid;
width:100vw;
height:100vh;
grid-template-columns:30% 70%;
grid-template-rows:92px calc(100vh - 92px - 5%) 5% 0px;
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
