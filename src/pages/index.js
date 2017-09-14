import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import SmoothScroll from 'smooth-scroll';

import LandingTile from '../components/LandingTile';
import Work from '../components/Work';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

var scroll = new SmoothScroll('a[href*="#"]');

export default () => {

  return (
    <div>
      <LandingTile />
      <Work />
    </div>
  );
};
