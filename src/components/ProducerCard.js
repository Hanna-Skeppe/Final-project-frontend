/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const ProducerCard = ({
  producer_name,
  producer_country,
  producer_image_url,
  url,
  _id,
}) => {
  return (
    <CardContainer>
      <CardTopWrapper>
        <ProducerCardHeading>{producer_name}</ProducerCardHeading>
        {producer_country === 'France' && (
          <FlagIcon src="./assets/france.png" />
        )}
        {producer_country === 'Italy' && <FlagIcon src="./assets/italy.png" />}
        {producer_country === 'Spain' && <FlagIcon src="./assets/spain.png" />}
      </CardTopWrapper>
      <CardImageWrapper>
        <CardImage src={producer_image_url} alt={producer_name} />
      </CardImageWrapper>
      <TextDiv>
        <CardLinkProducer to={`/singleproducer/${_id}/wines`} exact="true">
          All wines from this producer
        </CardLinkProducer>
        <CardLinkExternal href={url} target="_blank" rel="noopener noreferrer">
          Producer homepage
        </CardLinkExternal>
        <CreditsWrapper>
          Icons made by
          <LinkCredit href="https://www.freepik.com" title="Freepik">
            Freepik
          </LinkCredit>
          from
          <LinkCredit href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </LinkCredit>
        </CreditsWrapper>
      </TextDiv>
    </CardContainer>
  );
};

ProducerCard.propTypes = {
  producer_name: PropTypes.string.isRequired,
  producer_country: PropTypes.string.isRequired,
  producer_image_url: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default ProducerCard;

const CardContainer = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  max-height: 100%;
  background: rgba(236, 199, 172, 0.67);
  box-shadow: 3px 3px 8px rgba(90, 87, 87, 0.6);
  @media (max-width: 1500px) {
    height: 525px;
  }
  @media (max-width: 1024px) {
    margin: 10px;
  }
  @media (max-width: 560px) {
    margin: 10px;
    justify-content: center;
    height: auto;
  }
`;
const CardTopWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CardImageWrapper = styled.div`
  width: 55%;
  margin: 10px;
  align-self: center;
  @media (max-width: 560px) {
    margin: 0 0 15px 0;
  }
`;
const FlagIcon = styled.img`
  width: 35px;
  height: 35px;
  margin: 20px 20px 20px 10px;
  border-radius: 10px;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  margin: 0 20px 20px 20px;
  @media (max-width: 1024px) {
    margin: 0 20px 20px 20px;
  }
`;

const ProducerCardHeading = styled.h3`
  font-family: 'Italiana', serif;
  font-size: 26px;
  color: #495867;
  margin: 20px 10px;
  text-align: center;
  @media (max-width: 1024px) {
    margin: 20px;
    font-size: 22px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 315px;
  object-fit: cover;
  object-position: top center;
  border: 10px solid #fff;
  transition: transform 0.8s ease-in-out;
  &:hover {
    transform: rotate(-3deg);
  }
`;

const CardLinkProducer = styled(Link)`
  font-family: 'Overpass', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #495867;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #ce796b;
  }
  @media (max-width: 1500px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;
const CardLinkExternal = styled.a`
  font-family: 'Overpass', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #495867;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #ce796b;
  }
  @media (max-width: 1500px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const CreditsWrapper = styled.div`
  font-family: 'Overpass', sans-serif;
  font-size: 9px;
  color: #3a3a3a;
  text-align: right;
`;

const LinkCredit = styled.a`
  text-decoration: none;
  color: #3a3a3a;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #c9c4c4;
  }
`;
