import React from 'react'
import { Checkbox } from 'antd';
import 'antd/lib/checkbox/style'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { KaohsiungAllAreaName } from '../../utils'



const OutterWrapper = Styled.div`
margin-left:8px;
`

const CheckboxGroup = Checkbox.Group;
/*
*  [
  { label: '楠梓區', value: '楠梓區' },
  { label: '左營區', value: '左營區' },
  { label: '鼓山區', value: '鼓山區' },
  { label: '三民區', value: '三民區' },....]
*
*/
const generateCheckboxArrayOfObject = ()  => {

  return KaohsiungAllAreaName.map(d => { return {label:d, value:d}})
}

const areaOptions = generateCheckboxArrayOfObject()

 



const KCGAreaCheckboxGroup = props => {

  const outterWrapStopPropagation = (values) => {

    props.onCBChange(values)
  }

  return(
    <OutterWrapper>
      <CheckboxGroup options={areaOptions}  value={props.nowChecked} onChange={outterWrapStopPropagation} />
    </OutterWrapper>
  )
}

KCGAreaCheckboxGroup.propTypes = {

  onCBChange:PropTypes.func.isRequired,
  nowChecked:PropTypes.array.isRequired,
}


export default KCGAreaCheckboxGroup




