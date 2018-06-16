import React from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {Pagination} from 'antd';
import 'antd/lib/pagination/style'

import {changePage} from '../actions'

const Wrapper = Styled.section `
  grid-column:1/3;
  grid-rows:3/4;
  display:flex;
  justify-content:center;
  align-items:center;

  @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    grid-rows:4/5;
}
`

const PaginationArea = ({afterConditionDataCount, changePage}) => {

  const onPageOrRowPerPageChange = (newPageNum, pageSize) => {

    changePage(newPageNum)
  }

  const dataLength = afterConditionDataCount

  return (
    <Wrapper>
      <Pagination
        defaultCurrent={1}
        total={dataLength}
        defaultPageSize={5}
        onChange={onPageOrRowPerPageChange}/>
    </Wrapper>
  )

}

PaginationArea.propTypes = {

  afterConditionDataCount: PropTypes.number

}

function mapStateToProps({afterConditionDataCount}) {
  
  return {afterConditionDataCount}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changePage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationArea)