import React,{Component} from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'


const Wrapper = Styled.section`
grid-column:1/3;
grid-rows:3/4;
border:1px solid purple;
`


class PaginationArea extends Component{
constructor(props){
super(props)
}
render(){

    return (
        <Wrapper />
    )
}
    }


    PaginationArea.propTypes = {


  }
function mapStateToProps(state){
}




function mapDispatchToProps(dispatch){
return bindActionCreators({
},
dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(PaginationArea)