import React from 'react'
import Styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'




const rightToLeft = keyframes`
   from { transform:translateX(100vw);}
  
  to { transform:translateX(0vw);}
`

const leftToRight = keyframes`
   from { transform:translateX(0);}
  
  to { transform:translateX(100vw);}
`


const OutOfFlowWrapper = Styled.div`
  top:92px;
  left:0px;
  position:absolute;
  overflow-y:auto;
  width:100vw;
  transform:translateX(100vw);
  z-index:500;
  background-color:#FFFFFF;
`


const OutOfFlowWrapperRToL = Styled.div`
  top:92px;
  right:0px;
  position:absolute;
  overflow-y:auto;
  width:100vw;
  z-index:500;
  transform:translateX(-100vw);
  cursor:pointer;
  background-color:#FFFFFF;
  animation: ${rightToLeft} 1s forwards;
`

const OutOfFlowWrapperLToR = Styled.div`
  margin:25px 40px 25px 40px;
  top:92px;
  left:0px;
  position:fixed;
  overflow-y:auto;
  transform:translateX(0);
  z-index:500;
  cursor:pointer;
  animation: ${leftToRight} 1s forwards;
`

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




const  AnimatedLocationDetailCard   = (props) => {



 
  const {data} = props
  if(!data){  //when react init loaded in 
    return null
  }
  if(!props.isOpen){
    return (
      <OutOfFlowWrapper>  
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
      </OutOfFlowWrapper>  
    )
  }else{

    return (
      <OutOfFlowWrapperRToL  onClick={props.close}>
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
      </OutOfFlowWrapperRToL>
    )
  }
    


}


AnimatedLocationDetailCard.propTypes = {

  data:PropTypes.object,

  }

export default AnimatedLocationDetailCard