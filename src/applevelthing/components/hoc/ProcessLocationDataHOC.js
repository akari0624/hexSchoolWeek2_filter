import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateDataCountAfterDataFiltered } from '../../../landingPage/actions'

const filterLocationDataBySearchTerm = (searchTerm, locationData) => {

  if(searchTerm === ''){

    return locationData
  }


  return locationData.filter(d => d.Name.indexOf(searchTerm) > -1)

}

const  filterLocationDataByCheckedArea = (checkedAreaArr, locationData)  => {

  let allocator = []

  checkedAreaArr.forEach(areaName => {

    allocator = locationData.filter(data => data.Zone === areaName ).concat(allocator)

  })
  
  console.log(allocator);
  return allocator
  

}


const ProcessLocationDataHOC = ComposedComponent => (props) => {

  const {searchTerm, locationData, currPageInfo, checkedArea, updateDataCountAfterDataFiltered} = props

  let newLocationData = filterLocationDataBySearchTerm(searchTerm, locationData)


  if(checkedArea.length > 0){

    newLocationData = filterLocationDataByCheckedArea(checkedArea, newLocationData)
  }

  updateDataCountAfterDataFiltered(newLocationData.length)

  return (<ComposedComponent locationData={newLocationData} currPageInfo={currPageInfo} searchTerm={searchTerm}>
   {props.children}
  </ComposedComponent>)

}



ProcessLocationDataHOC.propTypes = {


  searchTerm:PropTypes.string,
  locationData:PropTypes.object.isRequired,
  currPageInfo:PropTypes.object,
  updateDataCountAfterDataFiltered:PropTypes.func,
  checkedArea:PropTypes.array,

}


function mapStateToProps(state){

  const { locationData, currPageInfo, searchTerm, checkedArea } = state

  return {
    locationData: locationData.records,
    currPageInfo,
    searchTerm,
    checkedArea,
  }

}


function mapDispatchToProps(dispatch){

  return bindActionCreators( {
    updateDataCountAfterDataFiltered
  }, dispatch)

}



export default (composedComponent) => connect(mapStateToProps, mapDispatchToProps)(ProcessLocationDataHOC(composedComponent))