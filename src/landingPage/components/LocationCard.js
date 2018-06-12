import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const CardWrapper = Styled.article`

width:calc(100% - 80px);
margin:25px 40px 25px 40px;
display:flex;
flex-direction:row;
box-shadow: 2px 5px 10px 0 #EBEBEB;
background-color:#FFFFFF;

@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  flex-direction:column;
  box-shadow:none; 
}
`

const LocationImageWrapper = Styled.figure`
width:28%;

@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  width:100%;
height:auto;
}
`

const LocationImage = Styled.img`

width:100%;

`


const LocationInfoWrapper = Styled.section`
padding-left:20px;
width:72%;
@media (max-width:${props => props.theme.mobileOneColumnWidth}){
  width:100%;
height:auto;
}

`

const LocationNameDIV = Styled.div`
margin-top:24px;
font-size:24px;
color:#9013FE;
font-family:Roboto-Bold;
`

const DescriptionSection = Styled.section`
margin-top:6px;
font-family: Roboto-Regular;
font-size: 16px;
color: #000000;
line-height: 24px;
`


const textLimit = 70

const shortenDesc = (text, limit) => {

  const  textLength = text.length

  const _limit = textLength > limit ? limit+1 : textLength;
  return `${text.substring(0, _limit)}...`
}


const LocationCard = ({data}) => {

  return (
    <CardWrapper> 
      <LocationImageWrapper>
        <LocationImage src={data.Picture1} alt={data.Picdescribe1} />
      </LocationImageWrapper>
      <LocationInfoWrapper>
        <LocationNameDIV>{data.Name}</LocationNameDIV>
        <DescriptionSection>{shortenDesc(data.Toldescribe, textLimit)}</DescriptionSection>
      </LocationInfoWrapper>
    </CardWrapper>
  )

}


LocationCard.propTypes = {

  data:PropTypes.object,
}
export default LocationCard