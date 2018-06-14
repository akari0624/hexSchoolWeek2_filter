import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const CardWrapper = Styled.article`

  width:calc(100% - 80px);
  margin:25px 40px 25px 40px;
  display:flex;
  flex-direction:row;
  box-shadow: 2px 5px 10px 0 #EBEBEB;
  background-color:#FFFFFF;
  cursor:pointer;

  @media (max-width:${props => props.theme.padWidth}){
    flex-direction:column;
    box-shadow:none; 
  }
`

const LocationImageWrapper = Styled.figure`
  width:35%;

  @media (max-width:${props => props.theme.padWidth}){
  width:100%;
  height:auto;
}
`

const LocationImage = Styled.img`

width:100%;

`


const LocationInfoWrapper = Styled.section`
padding-left:20px;
width:65%;
@media (max-width:${props => props.theme.padWidth}){
  width:100%;
height:auto;
}

`

const LocationNameDIV = Styled.div`
margin-top:12px;
font-size:24px;
color:#9013FE;
font-family:Roboto-Bold;
`

const DescriptionSection = Styled.section`
margin-top:16px;
font-family: Roboto-Regular;
font-size: 16px;
color: #000000;
line-height: 24px;
`

const MoreInfoSection = Styled.section`
margin-top:8px;
font-family: Roboto-Bold;
font-size: 16px;
color: #000000;
`


const textLimit = 70

const shortenDesc = (text, limit) => {

  const  textLength = text.length

  const _limit = textLength > limit ? limit+1 : textLength;
  return `${text.substring(0, _limit)}...`
}




const LocationCard = ({data, onItemClick}) => {

  const handleOnLocationCardClick = () => {
    onItemClick(data.Id)
  }


  

  return (
   // <Link to={`/location/${data.Id}`} style={{textDecoration:'none'}}>
    <CardWrapper onClick={handleOnLocationCardClick}> 
      <LocationImageWrapper>
        <LocationImage src={data.Picture1} alt={data.Picdescribe1} />
      </LocationImageWrapper>
      <LocationInfoWrapper>
        <LocationNameDIV>{data.Name}</LocationNameDIV>
        <DescriptionSection>{shortenDesc(data.Toldescribe, textLimit)}</DescriptionSection>
        <MoreInfoSection>{data.Zone}</MoreInfoSection>
      </LocationInfoWrapper>
    </CardWrapper>
  //  </Link>
  )

}


LocationCard.propTypes = {
  data:PropTypes.object,
}
export default LocationCard