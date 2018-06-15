import React from 'react'
import { Checkbox } from 'antd';
import 'antd/lib/checkbox/style'
import PropTypes from 'prop-types'
import { KaohsiungAllAreaName } from '../../utils'



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

 

const KCGAreaCheckboxGroup = props => (

  <CheckboxGroup options={areaOptions}  onChange={props.onCBChange} />

)

KCGAreaCheckboxGroup.propTypes = {

  onCBChange:PropTypes.func.isRequired,
}


export default KCGAreaCheckboxGroup




