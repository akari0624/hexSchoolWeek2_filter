import React, {Component} from 'react'
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

class PaginationArea extends Component {

  state = {
    currPage: 1
  }

  onPageOrRowPerPageChange = (newPageNum, pageSize) => {

    this
      .props
      .changePage(newPageNum)

    this.setState({currPage: newPageNum})
  }

  render() {

    const {afterConditionDataCount, changePage} = this.props

    console.log('length changed', afterConditionDataCount)

    const isPropsIsNew = this.lastProps !== this.props
    this.lastProps = this.props
    return (
      <Wrapper>
        <Pagination
          current={isPropsIsNew ? 1 : this.state.currPage}
          total={afterConditionDataCount}
          defaultPageSize={5}
          onChange={this.onPageOrRowPerPageChange}/>
      </Wrapper>
    )

  }

  componentDidMount() {

    this.lastProps = this.props

  }
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