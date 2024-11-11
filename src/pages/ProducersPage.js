/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import FadeIn from '../components/lib/FadeIn';
import HeaderProducer from '../components/HeaderProducer';
import ProducerCard from '../components/ProducerCard';
import { fetchProducersList } from '../reducers/producers';
import { BackLink } from '../components/lib/Links';
import { ProducerListWrapper } from '../components/lib/Containers';

const LoadingSpinner = () => {
  return (
    <LoadingWrapper className="la-ball-spin-clockwise la-3x">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  color: #ce796b;
  align-self: center;
  margin: auto;
  margin-top: 30px;
`;

const ProducersPage = () => {
  const dispatch = useDispatch();
  const producerList = useSelector((store) => store.producers.producers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProducersList());
      setLoading(false);
    }, 1500);
  }, [dispatch]);

  return (
    <>
      <HeaderProducer />
      <BackLink to="/">Home</BackLink>
      {loading && producerList.length < 1 ? <LoadingSpinner /> : ''}
      <ProducerListWrapper>
        {producerList.length >= 1 &&
          producerList.map((producer) => (
            <FadeIn key={producer._id}>
              <ProducerCard key={producer._id} {...producer} />
            </FadeIn>
          ))}
      </ProducerListWrapper>
    </>
  );
};

export default ProducersPage;
