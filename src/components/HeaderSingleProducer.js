import React from 'react';
import PropTypes from 'prop-types';
import img from '../assets/singleproducerheader.jpg';
import { SubHeaderImage } from './lib/Images';
import { SubHeaderText } from './lib/Text';
import { SubHeaderContainer, HeaderOverlay } from './lib/Containers';

const HeaderSingleProducer = ({ producerName }) => {
  return (
    <SubHeaderContainer>
      <SubHeaderImage src={img} alt="person holding red grapes" />
      <HeaderOverlay />
      <SubHeaderText>{producerName}</SubHeaderText>
    </SubHeaderContainer>
  );
};
HeaderSingleProducer.propTypes = {
  producerName: PropTypes.string.isRequired,
};
export default HeaderSingleProducer;
