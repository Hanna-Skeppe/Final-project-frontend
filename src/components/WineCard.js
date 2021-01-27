import React from 'react'
import styled from 'styled-components/macro'

export const WineCard = ({ name, image_url }) => {
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={image_url} alt={name}/>
      </CardImageWrapper>
      <CardTextWrapper>
        <CardTitle>{name}</CardTitle>
      </CardTextWrapper>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  margin: 20px auto;
  width: 90vw;
  max-width: 1100px;
  height: 450px;
  background: #EFEDED;
  box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
`
const CardImageWrapper = styled.div`
  width: 20%;
  margin: 10px;
  background: #EFEDED;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
`
const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  width: auto;
  word-wrap: wrap;
`
const CardTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 32px;
  text-decoration: underline;
`
