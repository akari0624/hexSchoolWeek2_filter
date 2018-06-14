import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'





const CardWrapper = Styled.article`

width:calc(100% - 80px);
margin:25px 40px 25px 40px;
display:flex;
flex-direction:column;
background-color:#FFFFFF;



`

const LocationImageWrapper = Styled.figure`
width:100%;
height:auto;
`

const LocationImage = Styled.img`

width:100%;

`


const LocationInfoWrapper = Styled.section`
padding-left:20px;
width:100%;
height:auto;
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




const LocationDetailCard = ({data}) => {

  return (
    <CardWrapper> 
      <LocationImageWrapper>
        <LocationImage src={data.Picture1} alt={data.Picdescribe1} />
      </LocationImageWrapper>
      <LocationInfoWrapper>
        <LocationNameDIV>{data.Name}</LocationNameDIV>
        <MoreInfoSection>{data.Zone}</MoreInfoSection>
        <DescriptionSection>{data.Toldescribe}</DescriptionSection>
      </LocationInfoWrapper>
    </CardWrapper>
  )

}


LocationDetailCard.propTypes = {

  data:PropTypes.object,

  }

export default LocationDetailCard