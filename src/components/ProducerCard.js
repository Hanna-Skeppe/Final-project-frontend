/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

// import { CardLink } from './lib/Links'

// import {
//   // CardContainer,
//   CardImageWrapper
// } from './lib/Containers'

export const ProducerCard = ({
  producer_name,
  producer_country,
  producer_image_url,
  url,
  _id
}) => {
  // console.log(_id)
  return (
    <CardContainer>
      <CardTopWrapper> 
        <ProducerCardHeading>{producer_name} </ProducerCardHeading>
        {producer_country === 'France' && <FlagIcon src="./assets/france.png" />}
        {producer_country === 'Italy' && <FlagIcon src="./assets/italy.png" />}
        {producer_country === 'Spain' && <FlagIcon src="./assets/spain.png" />}
      </CardTopWrapper>
      <CardImageWrapper>
        <CardImage src={producer_image_url} alt={producer_name} />
      </CardImageWrapper>
      <TextDiv>
        {/* <CardText>Country: {producer_country}</CardText> */}
        <a href={url} target="_blank" rel="noopener noreferrer">Producer homepage</a>
        <CardLink to={`/singleproducer/${_id}/wines`} exact>
          All wines from this producer
        </CardLink>
        <p><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></p>
      </TextDiv>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 450px;
  max-height: 100%;
  background: #f2f2f2; 
  box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  @media(max-width: 560px) {
    margin: 10px;
    justify-content: center;
    align-items: flex-end;
    height: auto;
  }
`
const CardTopWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`


const CardImageWrapper = styled.div`
  width: 30%;
  margin: 10px;
  background: #f2f2f2;
  align-self: center;
  @media(max-width: 1024px) {
    width: 25%;
  }
  @media(max-width: 560px) {
    width: 12%;
    margin: 0 0 15px 0;
  }
`
const FlagIcon = styled.img`
  width: 35px;
  height: 35px;
  margin: 10px;
  margin-left: 30px;
  border-radius: 10px;
  // border: 1px solid black;
  // box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  margin: 20px;
  @media(max-width: 1024px) {
    margin: 0 20px 20px 20px;
  }
`
const ProducerCardHeading = styled.h3`
  font-size: 26px;
  color: #495867;
  text-align: center;
  @media(max-width: 1024px) {
    margin: 20px;
  }
  
`
const CardText = styled.p`
  color: #3a3a3a;
`


const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border: 10px solid #fff; 
  box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
`

const CardLink = styled(NavLink)`
  font-weight: bold;
  color: #000;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #C9C4C4;
  }
  `