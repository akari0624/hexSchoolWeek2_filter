import React from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Pagination } from 'antd';
import 'antd/lib/pagination/style'

import {changePage} from '../actions'

const Wrapper = Styled.section`
  grid-column:1/3;
  grid-rows:3/4;
  border:1px solid purple;


  @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    grid-rows:4/5;
}
`



const  PaginationArea = ({locationData, changePage}) => {


  const onPageOrRowPerPageChange = (newPageNum, pageSize) => {

    changePage(newPageNum)
  } 

  const dataLength = locationData.records.length

  return (
    <Wrapper>
      <Pagination  
        defaultCurrent={1}  
        total={dataLength} 
        defaultPageSize={5} 
        onChange={onPageOrRowPerPageChange}
      />        
    </Wrapper>
  )
  
}


PaginationArea.propTypes = {

  locationData:PropTypes.object

}


function mapStateToProps(state){
  const {locationData} = state
  return {
    locationData
  }
}




function mapDispatchToProps(dispatch){
  return bindActionCreators({
    changePage
  },
  dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(PaginationArea)