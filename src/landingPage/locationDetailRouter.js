import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import FilterableSearchArea from './containers/FilterAbleSearchArea'
import ShowLocationsArea from './containers/ShowLocationsArea'
import NavBar from './containers/NavBar'

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


const LocationDetailRouter = props => {


    if(props.match){
        const id = props.match.params.id;

      return(
        <IndexLandingpageWrapper>
          <NavBar />
          <FilterableSearchArea />
          <ShowLocationsArea renderOneDetailLocationId={id}/>
        </IndexLandingpageWrapper>
      )

}
     return (
         <div>錯誤頁面</div>
     )
}

LocationDetailRouter.propTypes = {


  }
export default LocationDetailRouter