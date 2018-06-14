import React,{Component} from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Pagination } from 'antd';

const Wrapper = Styled.section`
grid-column:1/3;
grid-rows:3/4;
border:1px solid purple;


@media (max-width:${props => props.theme.mobileOneColumnWidth}){
    grid-rows:4/5;
}

`


const  PaginationArea = props => {


  render(){

    return (
      <Wrapper>
        <Pagination />        
      </Wrapper>
    )
  }
  }


    PaginationArea.propTypes = {


  }
function mapStateToProps(state){
    return {}
}




function mapDispatchToProps(dispatch){
return bindActionCreators({
},
dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(PaginationArea)