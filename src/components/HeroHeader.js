import styled from 'styled-components/macro';
import React from 'react';

import video from '../videos/green_grapes.mp4';
import { HeaderOverlay, HeroContainer } from './lib/Containers';
import { HeroHeaderText } from './lib/Text';

const HeroHeader = () => {
  return (
    <HeroContainer>
      <Video autoPlay="autoplay" loop="loop" muted>
        <source src={video} type="video/mp4" />
      </Video>
      <HeaderOverlay />
      <HeroHeaderText>Natural Wine Finder</HeroHeaderText>
    </HeroContainer>
  );
};

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 0;
  object-fit: cover;
  object-position: top center;
`;

export default HeroHeader;
